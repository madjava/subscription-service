const amqplib = require('amqplib');

module.exports = class PaymentService {
    constructor(connectionString, channelName, queueName) {
        this.connectionString = connectionString;
        this.channelName = channelName;
        this.queueName = queueName;
        this.connection = null;
        this.channel = null;
    }

    async init() {
        console.log(`Initializing RabitMQ connection to ${this.connectionString}`);
        this.connection = await amqplib.connect(this.connectionString);
        this.channel = await this.connection.createChannel(this.channelName);
        await this.channel.assertQueue(this.queueName);
        await this.channel.consume(this.queueName, this.onMessageReceived.bind(this));
    }

    onMessageReceived(message) {
        let contents = message.content.toString();
        let parsed = JSON.parse(contents);
        if (parsed.subscription && parsed.plan) {
            let {subscription, plan} = parsed;
            console.log(`Charging Card ${subscription.cardNumber} with ${plan.price}`);
        } else {
            console.log('Invalid payment. Aborting...');
        }
    }
}