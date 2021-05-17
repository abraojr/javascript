function purchases(work1, work2) {
    const buyIceCream = work1 || work2;
    const buyTv50 = work1 && work2;
    // const buyTv32 = !!(work1 ^ work2) // bitwise xor
    const buyTv32 = work1 != work2;
    const stayHealthy = !buyIceCream;

    return { buyIceCream, buyTv50, buyTv32, stayHealthy };
}

console.log(purchases(true, true));
console.log(purchases(true, false));
console.log(purchases(false, true));
console.log(purchases(false, false));