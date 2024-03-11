const Joi = require('@hapi/joi');

const password = (value, helpers) => {
    if (value.length < 8) {
        return helpers.message('password must be at least 8 characters');
    }

    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return helpers.message('password must contain at least 1 letter and 1 number');
    }

    return value;
}

const newUser = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone_number: Joi.string().required(),
        password: Joi.string().required().custom(password),
        role_id: Joi.number().integer().min(1).required(),
        id_banom: Joi.number().integer().min(1).required(),
    })
};

const updateUser = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        phone_number: Joi.string().required(),
        role_id: Joi.number().integer().min(1).required(),
        id_banom: Joi.number().integer().min(1).required(),
    })
};

const changePassword = {
    body: Joi.object().keys({
        old_password: Joi.string().required().custom(password),
        new_password: Joi.string().required().custom(password),
    })
};

const forgotPassword = {
    body: Joi.object().keys({
        new_password: Joi.string().required().custom(password),
    })
};

const requestForgotPassword = {
    query: Joi.object().keys({
        email: Joi.string().email().required(),
    })
};

module.exports = {
    newUser,
    updateUser,
    changePassword,
    forgotPassword,
    requestForgotPassword,
};