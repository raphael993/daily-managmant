const fs = require('fs');
const path = require('path');

function createLogFile(log) {
    return fs.appendFile('log.txt', log, (err) => console.log(err));
}

function createLogStr(request) {
    console.log(request)
    return `Log at: ${new Date()}\n\n`;
}

function createLog(request) {
    createLogFile(createLogStr(request));
}

module.exports = createLog;