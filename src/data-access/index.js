const {client, closeClient} = require('../db/index');

const makeTaskDb = require('./task-db');
const taskDb = makeTaskDb({client});


module.exports = {
    taskDb, closeClient
};
