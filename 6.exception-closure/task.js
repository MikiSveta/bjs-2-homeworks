//Задача 1
let parseCount = (count) => {

	count = Number.parseInt(count);

	if (Number.isNaN(count)) throw new Error('Невалидное значение');

	return count;
}

let validateCount = (count) => {

	try {
		return parseCount(count);
	} catch(e) {
		return e;
	} 
}

//Задача 2

class Triangle {

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {

			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {

		this.p = this.a + this.b + this.c;
      	return this.p;
	}

	getArea() {

		this.p2 = (this.a + this.b + this.c) / 2;
    	this.area = Number((Math.sqrt(this.p2 * (this.p2 - this.a) * (this.p2 - this.b) * (this.p2 - this.c))).toFixed(3));
    	return this.area;
	}
}

let getTriangle = (a, b, c) => {

	try {
		return new Triangle(a, b, c);
	} catch(e) {
		return new class SimpleClass {
			getArea = () => 'Ошибка! Треугольник не существует';
        	getPerimeter = () => 'Ошибка! Треугольник не существует';
    	}
	} 
}



