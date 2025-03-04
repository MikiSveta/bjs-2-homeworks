//Задача 1

class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}


class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

//Задача 2

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

		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			} 
		}
		return null;
	}

	giveBookByName(bookName) {
		
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let remoteBook = this.books[i];
				this.books.splice(i, 1)
				return remoteBook	
			} 
		}
		return null;
	}
}

//Задача 3

class Student {

	constructor(name) {
		this.name = name;
	}

	addMark(mark, subject) {

		if (this[subject] === undefined) {
			this[subject] = [];
		}

		if (mark > 5 || mark < 1 || Number.isNaN(mark)) {
			console.log('Ошибка, оценка должна быть числом от 1 до 5');
			return this[subject];
		}

		this[subject].push(Number(mark));
		return this[subject];
	}

	getAverageBySubject(subject) {

		if(this[subject] === undefined) {
			return 0;
		}

		let sum = 0;
    	let avg = 0;

    	for (let i = 0; i < this[subject].length; i++) {
      		sum += this[subject][i];
      		avg = Number(sum / this[subject].length);
    	}

    	return avg;
	}

	getAverage() {

		const subjects = Object.keys(this);

		if (subjects.length === 1) {
			return 0;
		}

		let sum = 0;
    	let avg = 0;
		
		for (let i = 1; i < subjects.length; i++) {
			let subject = subjects[i];
			let subjectMarks = this[subject];
			let sumSubject = 0;
			for (let j = 0; j < subjectMarks.length; j++) {
		    	sumSubject += subjectMarks[j];
			}
			sum += sumSubject / subjectMarks.length;
		}

		avg = sum / (subjects.length - 1);

    return avg;
	}
}


