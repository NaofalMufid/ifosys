const Joi = require('@hapi/joi');

const newOrg = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        phone_number: Joi.string(),
        email: Joi.string().email(),
        address: Joi.string(),
        description: Joi.string(),
        history: Joi.string(),
        id_admin: Joi.string().required(),
        id_banom: Joi.number().integer().min(1).required(),
    })
};

const updateOrg = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        phone_number: Joi.string(),
        email: Joi.string().email(),
        address: Joi.string(),
        description: Joi.string(),
        history: Joi.string(),
        id_admin: Joi.string().required(),
        id_banom: Joi.number().integer().min(1).required(),
    })
};

module.exports = {
    newOrg,
    updateOrg,
};