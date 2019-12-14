const Joi = require('@hapi/joi');
const Subscription = require('../models/subscription');
const Plan = require('../models/plan');
const ValidationError = require('../errors/validation.errors');

'use strict';

const validators = {
    "Subscription": {
        scopes: {
            default: Subscription.SubscriptionValidationSchema
        }
    },
    "Plan": {
        scopes: {
            default: Plan.PlanValidationSchema
        }
    }
}

function scopeExists(validator, scope) {
    return Object.keys(validator.scopes).find(key => key == scope) != undefined;
}

function getSchema(model, scope) {
    const validator = validators[model];
    if (!validator) {
        throw new Error('Validator does not exist')
    }
    if (validator.scopes) {
        if (scope) {
            if (!scopeExists(validator, scope)) {
                throw new Error(`Scope ${scope} does not exist in ${model} validator`);
            } else {
                return validator.scopes[scope];
            }
        } else {
            return validator.scopes.default;
        }
    } else {
        return validator;
    }
}

function validate(model, object, scope) {
    const schema = getSchema(model, scope);
    return schema.validate(object);
}

module.exports = function validationMiddleware(model, scope) {
    return (req, res, next) => {
        const validationResult = validate(model, req.body, scope);
        if (validationResult.error) {
            throw new ValidationError(`${validationResult.error}`, model);
        } else {
            next();
        }
    }
}