const notFound = (req, res) => {
    return res.status(404).send({ message: 'Not Found!' })
}

const globalError = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const statusDsc = error?.name?.replace(/([A-Z])/g, ' $1')?.trim() || 'error'
    const message = error.message || 'failed';
    const data = error.data;
    return res.status(status).json({
        status: statusDsc,
        message: message,
        data: data,
    });
}

// Define a base error class with a custom status code and message
class BaseError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

// Define a BadRequestError class that extends the base error class
class BadRequestError extends BaseError {
    constructor(message = 'Bad Request') {
        super(400, message);
    }
}

// Define a UnauthorizedError class that extends the base error class
class UnauthorizedError extends BaseError {
    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}

// Define a ForbiddenError class that extends the base error class
class ForbiddenError extends BaseError {
    constructor(message = 'Forbidden') {
        super(403, message);
    }
}

// Define a NotFoundError class that extends the base error class
class NotFoundError extends BaseError {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}

// Define a ServerError class that extends the base error class
class ServerError extends BaseError {
    constructor(message = 'Internal Server Error') {
        super(500, message);
    }
}

class ConflictError extends BaseError {
    constructor(message = 'Conflict') {
        super(409, message); // 409 Conflict status code
    }
}

module.exports = {
    notFound,
    globalError,
    BadRequestError, 
    UnauthorizedError, 
    ForbiddenError, 
    NotFoundError, 
    ServerError,
    ConflictError
};