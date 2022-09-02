

//Задача №1. Форматтер чисел

function parseCount(meaning) {
    let pats = Number.parseInt(meaning);
    if (Number.isNaN(pars)) {
        throw new Error("Невалидное значение");
    } else {
        return pats;
    }

}

function vilidateCount(meaning) {
    try {
        return parseCount(meaning);
    } catch (error) {
        return error;
    }
}

//Задача №2. Треугольник

class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 + side2) < side3 || (side2 + side3) < side1 || (side1 + side3) < side2) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return side1 + side2 + side3;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let formulaGeron = Math.sqrt(p(p - side1) * (p - side2) * (p - side3));
        return parseFloat(formulaGeron.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch (error) {
        return {
            getPerimeter: function () {
                return 'Ошибка! Треугольник не существует';
            },
            getArea: function () {
                return 'Ошибка! Треугольник не существует';
            },
        }
    }
}






