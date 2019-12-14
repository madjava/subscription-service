const Joi = require('@hapi/joi');

module.exports.PlanValidationSchema = Joi.object().keys(
    {
        name: Joi.string().required(),
        price: Joi.number().positive().allow(0).required(),
        type: Joi.string().valid('Monthly', 'Yearly').required(),
        userId: Joi.number().positive().required()
    }
);