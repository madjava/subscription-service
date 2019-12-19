## Start a Docker MySql instance

```bash
docker run --name subscription-as-a-service -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:5.7

```
```sql
CREATE SCHEMA SubscriptionAsAService CHARACTER SET utf8mb4;
```

```bash
docker run --name plans-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3307:3306 -d mysql:5.7
```

```sql
CREATE schema PlansDb CHARACTER SET "utf8mb4"
```

```bash
docker run --name subscriptions-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3308:3306 -d mysql:5.7
```

```sql
CREATE schema SubscriptionsDb CHARACTER SET 'utf8mb4';
```

```bash
sequelize model:generate --name Plan --attributes name:string,price:float,type:string,userId:integer --force
```

```bash
sequelize model:generate --name Subscription --attributes planId:integer,coupon:string,cardnumber:string,holderName:string,expirationDate:string,cvv:string --force  
```

```bash
sequeslize db:migrate
```