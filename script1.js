function customCounter(initValue, addValue) {
    let i = initValue
    return function plus() {
        debugger
        return i = i + addValue
    }
}
const myCounter = customCounter(2, 4);
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())