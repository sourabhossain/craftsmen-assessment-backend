require('dotenv').config();

const config = {
    default: {
        PORT: process.env.PORT || '3000',
        DATABASE_URL: process.env.DATABASE_URL
    }
};

module.exports = config.default;
