const fs = require('fs');
const path = require('path');
const os = require('os');

function read(path) {
    return new Promise(resolve => {
        fs.readFile(path, function (_, content) {
            resolve(content.toString());
        });
    });
}

const filePath = path.join(__dirname, 'data.txt');
read(filePath)
    .then(content => content.split(`${os.EOL}`))
    .then(rows => rows.join(','))
    .then(content => `The final value is: ${content}`)
    .then(console.log);