const anonymous = process.argv.indexOf('-a') !== -1;
// console.log(anonymous);

const os = require('os');

if (anonymous) {
    process.stdout.write(`Hey Anonymous !${os.EOL}`);
    process.exit();
} else {
    process.stdout.write('Enter your name: ');
    process.stdin.on('data', data => {

        const name = data.toString().replace(`${os.EOL}`, '');

        process.stdout.write(`Hey ${name}!!${os.EOL}`);
        process.exit();
    });
}