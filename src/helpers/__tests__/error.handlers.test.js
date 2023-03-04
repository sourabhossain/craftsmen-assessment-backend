const httpMocks = require('node-mocks-http');
const errorHandler = require('./../error.handlers');

const responseConstant = require('./../../constants/response.constant');

describe('notFound', () => {
    test('should return 404 status code with the correct message and code', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();

        errorHandler.notFound(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getData()).toEqual({
            success: false,
            message: responseConstant.COMMON.API_NOTFOUND.message,
            code: responseConstant.COMMON.API_NOTFOUND.code
        });
    });
});

describe('internalServerError', () => {
    test('should return 500 status code with the correct message, code, and errors', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const error = new Error('Some internal server error');
        error.status = 500;

        errorHandler.internalServerError(error, req, res);

        expect(res.statusCode).toBe(500);
        expect(res._getData()).toEqual({
            success: false,
            message: responseConstant.COMMON.UNKNOWN_ERROR.message,
            code: responseConstant.COMMON.UNKNOWN_ERROR.code,
            errors: errorHandler.errorHttpResponse(error)
        });
    });

    test('should return 500 status code with the correct message, code, and errors when error has no status', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const error = new Error('Some internal server error');

        errorHandler.internalServerError(error, req, res);

        expect(res.statusCode).toBe(500);
        expect(res._getData()).toEqual({
            success: false,
            message: responseConstant.COMMON.UNKNOWN_ERROR.message,
            code: responseConstant.COMMON.UNKNOWN_ERROR.code,
            errors: errorHandler.errorHttpResponse(error)
        });
    });
});

describe('errorHttpResponse', () => {
    test('should return error.errors if errors key is in error object', () => {
        const error = {
            errors: ['Error 1', 'Error 2']
        };

        const result = errorHandler.errorHttpResponse(error);

        expect(result).toEqual(error.errors);
    });

    test('should return error.message if error code is 11_000', () => {
        const error = {
            code: 11_000,
            message: 'Some error message'
        };

        const result = errorHandler.errorHttpResponse(error);

        expect(result).toEqual(error.message);
    });

    test('should return the error object if none of the conditions are met', () => {
        const error = {
            someKey: 'someValue'
        };

        const result = errorHandler.errorHttpResponse(error);

        expect(result).toEqual(error);
    });
});
