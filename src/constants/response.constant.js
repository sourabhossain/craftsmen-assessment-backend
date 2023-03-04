const responseConstant = {
    COMMON: {
        API_NOTFOUND: {
            message: 'Requested Resource Not Found',
            code: '1000'
        },
        UNKNOWN_ERROR: {
            message: 'Unknown errors',
            code: '1001'
        }
    },
    POST: {
        CREATION_SUCCEEDED: {
            message: 'Post creation succeeded.',
            code: '1101'
        },
        CREATION_FAIL: {
            message: 'Post creation failed.',
            code: '1102'
        },
        UPDATE_SUCCEEDED: {
            message: 'Post update succeeded.',
            code: '1103'
        },
        UPDATE_FAIL: {
            message: 'Post update failed.',
            code: '1103'
        },
        REFERENCE_NOT_FOUND: {
            message: 'Post reference not found.',
            code: '1104'
        },
        FETCH_SUCCEEDED: {
            message: 'Post fetch succeeded.',
            code: '1105'
        },
        FETCH_FAIL: {
            message: 'Post fetch failed.',
            code: '1106'
        },
        DELETE_SUCCEEDED: {
            message: 'Post delete succeeded.',
            code: '1107'
        },
        DELETE_FAIL: {
            message: 'Post delete failed.',
            code: '1108'
        }
    }
};

module.exports = responseConstant;
