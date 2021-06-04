// without promise
const http = require('http');

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
    http.get(url, res => {
        let result = '';

        res.on('data', data => {
            result += data;
        });

        res.on('end', () => {
            callback(JSON.parse(result));
        });
    });
}

let names = [];
getClass('A', students => {
    names = names.concat(students.map(st => `A: ${st.nome}`));
    getClass('B', students => {
        names = names.concat(students.map(st => `B: ${st.nome}`));
        getClass('C', students => {
            names = names.concat(students.map(st => `C: ${st.nome}`));
            console.log(names);
        });
    });
}); // callback hell