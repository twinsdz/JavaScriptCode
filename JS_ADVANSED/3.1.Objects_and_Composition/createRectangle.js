function createRect(width, height) {
    const rect = {
        width,
        height
    };

    rect.getArea = () => {
        // функцията сочи само към определения обект
        return rect.width * rect.height;
    };

    // връщаме референция към обекта, който пази функцията getArea
    return rect;
}

const myRect = createRect(5, 6);

console.log(myRect);
// закачен към обекта метод
console.log(myRect.getArea(5, 6));

// функция извадена по референция. Сочи към референцията в обекта.
const getArea = myRect.getArea;

// извикване на функсията без да е закачена към обект. Свободно седяща референция към функцията.
console.log(getArea());