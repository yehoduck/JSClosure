function createLogger(prefix) {
    return function check(message) {
        console.log(`${prefix}: ${message}`)
    }
}
const serverLogger = createLogger('SERVER');
const dbLogger = createLogger('DATABASE');
serverLogger('Server started');
dbLogger('Data saved');