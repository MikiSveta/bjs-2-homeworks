//Задача 1

class AlarmClock {

	constructor(alarmCollection) {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, func, id) {

		if(!id) {
			throw new Error('Ошибка! ID будильника не задан'); 
		};

		if(this.alarmCollection.some(item => item.id === id)) {
				return console.error('Ошибка! id будильника уже существует');
			}; 
				
		this.alarmCollection.push({id, time, callback: func});		
	}
	

	removeClock(id) {

		let removeId = this.alarmCollection.findIndex((item) => item.id === id);
		return this.alarmCollection.splice(removeId, 1)
		
		
	}

	getCurrentFormattedTime() {

		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();

		if(m < 10) {
			m = '0' + m;
		}

		if(h < 10) {
			h = '0' + h;
		}

		return `${h}:${m}`;
	}

	start() {

		const checkClock = (alarm) => {

			if (this.getCurrentFormattedTime() === alarm.time) {
				alarm.callback();
			} 
		}

		this.timerId = setInterval(() => {
			this.alarmCollection.forEach((alarm) => checkClock(alarm))}, 1000);						
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {

		console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)

		this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} установлен на ${alarm.time}`));

		
	}

	clearAlarms() {
		clearInterval(this.timerId);
		this.alarmCollection = [];
	}
}

function testCase() {
	let phoneAlarm = new AlarmClock();
	phoneAlarm.addClock("16:01", () => console.log('Пора вставать'), 1); 
	phoneAlarm.addClock("16:02", () => {console.log('Давай, вставай уже'); phone.removeClock(2)}, 2);
	phoneAlarm.addClock("16:03", () => console.log('Иди умываться'), );
	phoneAlarm.addClock("16:04", () => {console.log('Вставай, а то проспишь'); 
	phoneAlarm.clearAlarms();
	phoneAlarm.printAlarms();}, 3);
	phoneAlarm.addClock("16:05", () => console.log('Вставай, а то проспишь'), 1);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}