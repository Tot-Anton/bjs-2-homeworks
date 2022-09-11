class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(id, time, callback) {

        if (id === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.find((element) => element.id === id)) {
            return console.error('error text');
        }
        return this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let arr = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id != id);
        return !(arr === this.alarmCollection.length);
    }

    getCurrentFormattedTime() {
        let date = new Date.toLocaleTimeString().slice(0, -3);
        return date;
    }

    start() {
        function checkClock(check) {
            if (this.getCurrentFormattedTime() === check.time) {
                close.callback();
            } else if (this.timerId === null) {
                this.timerId = setInterval(() => this.alarmCollection.forEach(check => this.checkClock(check)), 1000)
            }
        }
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }


    printAlarms() {
        this.alarmCollection.forEach(element => { console.log(element.id, element.time) });
    }

    clearAlarms() {
        
        this.alarmCollection = [];
        this.stop();
        
    }

}