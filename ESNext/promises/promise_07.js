function test(value, chanceOfError) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceOfError) {
                reject('An error occurred !');
            } else {
                resolve(value);
            }
        } catch (e) {
            reject(e);
        }
    });
}

test('Testing...', 0.5)
    .then(v => `Value: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Specific error: ${err}`)
    )
    .then(() => console.log('Almost end!'))
    .catch(err => console.log(`General error: ${err}`))
    .then(() => console.log('End!'));