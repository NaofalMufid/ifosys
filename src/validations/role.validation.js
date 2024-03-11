const Joi = require('@hapi/joi');

const newRole = {
    body: Joi.object().keys({
        role_name: Joi.string().required()
    })
};

module.exports = {
    newRole,
};