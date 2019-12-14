const Joi = require('@hapi/joi');
const Subscription = require('../models/subscription');
const Plan = require('../models/plan');

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
    return Object.keys(validator.scopes).find(key -> key == scope) != undefined;
}