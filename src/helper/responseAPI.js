const successResponse = (res, message, status_code, data) => {
    return res.status(status_code || 200).json({
        status: 'success',
        message: message || 'success',
        data: data || [],
    });
}

const errorResponse = (res, message, data, status_code) => {
    return res.status(status_code || 500).json({
        status: 'error',
        message: message || 'failed',
        data: data || [],
    });
}

module.exports = {
    successResponse, errorResponse
}