function parseCount(count) {
	let parseResult = Number.parseFloat(count);
	if (Number.isNaN(parseResult) === true) {
		throw new Error("Невалидное значение");
	} else {
		return parseResult
	};
}

function validateCount(count) {
	try {
		let parseFunc = parseCount(count);
		if (Number.isNaN(parseFunc) === false) {
			return parseFunc
		};
	} catch (error) {
		return error
	};
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
	};
	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		const halfP = 0.5 * (this.a + this.b + this.c);
		const stringHeronsValue = (halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)) ** 0.5;
		let numberHeronsValue = stringHeronsValue.toFixed(3);
		numberHeronsValue = Number(numberHeronsValue);
		return numberHeronsValue;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		let obj = {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},

			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		};
		return obj;
	}
}
