function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {

	if (this.marks === undefined) {
      this.marks = [];
      this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
	this.marks =  Object.values(mark);
}

Student.prototype.getAverage = function () {
	let sum = 0;
  	let avg = 0;

  	for(let i = 0; i < this.marks.length; i++) {
  		sum += this.marks[i];
  		avg = Number(sum / this.marks.length);
  }

  this.avg = avg;
  
  return this.avg;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

// ваш код для остальных методов