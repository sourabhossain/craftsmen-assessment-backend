const httpStatus = require('http-status');
const responseConstant = require('../constants/response.constant');

// handle not found errors
const notFound = (req, res, next) => {
    const { message, code } = responseConstant.COMMON.API_NOTFOUND;

    res.status(httpStatus.NOT_FOUND).send({
        success: false,
        message,
        code
    });
};

// handle internal server errors
const internalServerError = (error, req, res, next) => {
    const { message, code } = responseConstant.COMMON.UNKNOWN_ERROR;

    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).send({
        success: false,
        message,
        code,
        errors: errorHttpResponse(error)
    });
};

// handle http errors response
const errorHttpResponse = (error) => {
    if ('errors' in error) {
        return error.errors;
    }

    if (error.code === 11_000) {
        return error.message;
    }

    return error;
};

module.exports = { notFound, internalServerError, errorHttpResponse };
