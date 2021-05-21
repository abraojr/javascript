/*Write two functions, one for arithmetic progression and one for geometric progression that take as parameters
a number n (number of terms), a1 (the first term) and r (the ratio) and write the n terms as well as the sum of
the elements.*/

function pA(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Sum: ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2)
}

function pG(n, a1, r) {
    //console.log(a1)
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log('Sum: ' + (a1 * ((r ** n) - 1)) / (r - 1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)