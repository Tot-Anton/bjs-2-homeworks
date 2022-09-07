
//Задача №1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


//Задача №2. Библиотека
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        if (result === undefined) {
            return null;
        } else {
            return result;
        }
    }

    giveBookByName(bookName) {
        let searchResult = this.books.find(book => book.name === bookName);
        if (typeof searchResult === 'object') {
            this.books.splice(this.books.indexOf(searchResult), 1);
            return searchResult;
        } else {
            return null;
        }
    }
}

//Задача №3. Журнал успеваемости

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {
            "algebra": [1, 2, 3, 4, 5],
            "geometry": [1, 2, 3, 4, 5],
        };

    }

    addMark(mark, subject) {
        if (mark > 5 || mark < 1) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        } else if (!this.marks[subject]) {
            this.marks[subject] = [];
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            return "Несуществующий предмет";
        } else {
            return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
        }

        /*let sum = 0;
        for (let i = 0; i < this.marks[subject].length; i++) {
            sum += this.marks[subject][i];            
        }
        return sum;*/

    }

    getAverage() {
        return Object.keys(this.marks).reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / Object.keys(this.marks).length;

        /*const subject = Object.keys(this.marks);
        let sum = 0;
        for (let i = 0; i < subject.length; i++) {
            sum += this.getAverageBySubject(subject[i]);            
        }
        return sum / subject.length;*/
    }
}
/*
const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");*/
