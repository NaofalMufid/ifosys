const jwt = require('jsonwebtoken');
const { errorResponse } = require('../helper/responseAPI');
const token_secret = process.env.JWT_TOKEN_SECRET;

const authSuperAdmin = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return errorResponse(res, "Unauthorized", 401);
    }

    jwt.verify(token, token_secret, (err, decoded) => {
        if (err) {
            return errorResponse(res, "Access Token Expired", 400);
        } else if (decoded.role_id === 1 && decoded.banom_id === null) {
            req.user = decoded;
            next();
        } else {
            return errorResponse(res, "Invalid Permission", 403);
        }
    });
};

const authPengurus = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return errorResponse(res, "Unauthorized", 401);
    }

    jwt.verify(token, token_secret, (err, decoded) => {
        if (err) {
            return errorResponse(res, "Access Token Expired", 400);
        } else if (decoded.role_id === 2 && decoded.banom_id !== null) {
            req.user = decoded;
            next();
        } else {
            return errorResponse(res, "Invalid Permission", 403);
        }
    });
};

const authCommon = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return errorResponse(res, "Unauthorized", 401);
    }

    jwt.verify(token, token_secret, (err, decoded) => {
        if (err) {
            return errorResponse(res, "Access Token Expired", 400);
        } else if ([1, 2].includes(decoded.role_id)) {
            req.user = decoded;
            next();
        } else {
            return errorResponse(res, "Invalid Permission", 403);
        }
    });
};

module.exports = {
    authSuperAdmin,
    authPengurus,
    authCommon,
};
