const Joi = require('@hapi/joi');

const newBanom = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        order_number: Joi.number().integer().min(1).required()
    })
};

module.exports = {
    newBanom,
};