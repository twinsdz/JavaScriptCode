function solution() {
    let state = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }
}

const firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

/* function solution() {
    let state = '';

    const result = {
        append,
        removeStart,
        removeEnd,
        print
    };

    return result;

    function append(str) {
        state += str;
        return result;
    }

    function removeStart(n) {
        state = state.slice(n);
        return result;
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
        return result;
    }

    function print() {
        console.log(state);
    }
}

const firstZeroTest = solution();
firstZeroTest.append('hello').append('again').removeStart(3).removeEnd(4).print(); */
