/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 */

/* function solve(area, vol, input) {
    const cubes = JSON.parse(input);

    const result = [];

    for (let cube of cubes) {
        const cubeArea = area.apply(cube);
        const cubeVolume = vol.apply(cube);
        result.push({
            area: cubeArea,
            volume: cubeVolume
        });
    }
    return result;

} */


/* function solve(area, vol, input) {
    const cubes = JSON.parse(input);

    return result = cubes.map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)
    }));
} */

function solve(area, vol, input) {
    return JSON.parse(input).map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)
    }));
}

/* let solve = (area, vol, input) => JSON.parse(input).map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)
    })); */



const input = '[{"x":"10","y":"-22","z":"10"}, {"x":"47","y":"7","z":"-5"}, {"x":"55","y":"8","z":"0"}, {"x":"100","y":"100","z":"100"}, {"x":"55","y":"80","z":"250"}]';

console.log(solve(area, vol, input));

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}