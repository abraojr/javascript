// A factory function returns a new object
module.exports = () => {
    return {
        value: 1,
        increase() {
            this.value++;
        }
    }
}