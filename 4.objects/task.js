//Создайте функцию конструктор Student(name, gender, age) и с помощью оператора new несколько экземпляров объектов (студентов).
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

//Создайте доступный для всех экземпляров student метод setSubject(subjectName)
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

//Создайте метод addMark(mark)
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

//Создайте метод addMarks(mark1,mark2,mark3...) 
Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

//Создайте метод getAverage()
Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

//Создайте метод exclude(reason)
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}