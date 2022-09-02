

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


