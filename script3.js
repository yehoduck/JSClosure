function createLimiter(limit) {
    let count = 0
    return function limitCheck() {
        // debugger
        count++
        if (count > limit) {
            console.log("error")
        } else {
            console.log("ok")
        }
    }
}
const limited = createLimiter(3)
limited()
limited()
limited()
limited()