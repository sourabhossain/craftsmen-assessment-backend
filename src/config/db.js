const mongoose = require('mongoose');
const CONFIG = require('./config');
const DB = CONFIG.DATABASE_URL;

const connectWithMongoDB = () => {
    mongoose.set('strictQuery', false);

    mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.debug('Database successfully connected');
        })
        .catch((error) => {
            console.debug(`Can not connect to database, ${error}`);
        });
};

module.exports = connectWithMongoDB;
