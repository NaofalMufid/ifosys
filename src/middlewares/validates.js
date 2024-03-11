const Joi = require('@hapi/joi');
const select = require('../helper/select');
const { BadRequestError } = require('../helper/errorHandler');

const validates = (schema) => (req, res, next) => {
    const validSchema = select(schema, ['params', 'query', 'body']);
    const object = select(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        const errorMessage = error.details.map((item) => item.message).join(', ');
        return next(new BadRequestError(errorMessage));
    }
    Object.assign(req, value);
    return next();
};

module.exports = validates;
