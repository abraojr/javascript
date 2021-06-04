const http = require('http');

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';

            res.on('data', data => {
                result += data;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(result));
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
}

// ES8 Feature
// Aims to simplify the use of promises...

let getStudents = async () => {
    const classA = await getClass('A');
    const classB = await getClass('B');
    const classC = await getClass('C');
    return [].concat(classA, classB, classC);
} // returns an object of type AsyncFunction

getStudents()
    .then(students => students.map(student => student.nome))
    .then(names => console.log(names));
