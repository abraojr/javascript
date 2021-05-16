const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () { console.log(i) });
}

funcs[2](); //OUTPUT = 10
funcs[8](); //OUTPUT = 10