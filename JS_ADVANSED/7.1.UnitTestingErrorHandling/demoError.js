function solve() {
    try {
        throw Error('my error');
    } catch (error) {
        console.log(error);
    } finally {                // finally се изпълнява винаги
        console.log('desi');
    }
}
solve();