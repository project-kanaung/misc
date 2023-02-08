import { makeAutoObservable } from "mobx"

class Counter {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseCounter = () => {
        this.count += 1;
        console.log('count increased', this.count)
    }

    decreaseCounter = () => {
        this.count -= 1;
        console.log('count decreased', this.count)
    }

}

export const CounterStore = new Counter()