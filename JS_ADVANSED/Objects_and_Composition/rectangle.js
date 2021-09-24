function rectangle(width, height, color) {
    let firstChar = color[0].toUpperCase();
    color = firstChar + color.substring(1);
    let rect = {
        width,
        height,
        color: color,
        calcArea() {
            let aria = this.width * this.height;
            return aria;
        }
    };
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());