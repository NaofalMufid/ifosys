const Joi = require('@hapi/joi');

const paramId = {
    params: Joi.object({
        id: Joi.number().integer().min(1).required(),
    }),
};

const paramStringId = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

module.exports = {
    paramId,
    paramStringId,
};