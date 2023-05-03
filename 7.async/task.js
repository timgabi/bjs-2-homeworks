class AlarmClock {

	constructor() { //выделяет память для объекта.
		this.alarmCollection = [];
		this.intervalId;
	}

	addClock(time, action) { //добавляет новый звонок в коллекцию существующих.
		this.time //время когда действие должно запуститься
		this.action(); //колбэк действия

		if(this.time || this.action === undefined) { //проверка аргументов
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if(addClock(time, action) === this.alarmCollection[i]) { //проверка совпадений
			console.warn('Уже присутствует звонок на это же время');
		}

		let obj = new Object(); //новый объект
		this.obj.callback;
		this.obj.time;
		this.obj.canCall = true; //значение колбэка в новом объекте;
		this.alarmCollection.push(this.obj) //пополнение массива
	}
	removeClock(time) { //удаляет звонки по определённому времени.
		for(let i = 0; i < this.alarmCollection.length; i++)
			if(this.alarmCollection[i] === this.time) {
				this.alarmCollection.splice(i, i);
			}
	}
	getCurrentFormattedTime() {
		return String(this.time);
	}
	start() {
		if (this.intervalId !== undefined) {
			return this.intervalId;
		}
		let newInt = setInterval(enumeration, 1000);
		this.enumeration = this.alarmCollection.forEach(function getCurrentFormattedTime(item, i, alarmCollection) {
			if(this.time = this.ob.time && this.obj.canCall === true) {
				this.obj.canCall = false;
				return this.obj.canCall;
			}
			this.newInt = this.intervalId;
		})	
	}
	stop() {
		clearInterval();
		this.intervalId = null;
	}
	resetAllCalls() {
		this.obj.forEach(function(item, i, arr) {
			this.obj.canCall = true;
		});
	}
	clearAlarms() {
		stop();
		this.alarmCollection = [];
	}
}


