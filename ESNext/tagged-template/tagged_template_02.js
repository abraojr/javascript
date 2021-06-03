function real(parts, ...values) {
    const result = [];
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`;
    });
    return result.join('');
}

const price = 29.9;
const installment = 11;
console.log(real`1x of ${price} or 3x of ${installment}.`);