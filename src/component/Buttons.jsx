import React from 'react'
import { CounterStore } from '../store/counterStore'
import { observer } from 'mobx-react-lite'

const Buttons = () => {
    return (
        <div>
            <button onClick={CounterStore.increaseCounter}>+</button>
            {" "}
            <button onClick={CounterStore.decreaseCounter}>-</button>
        </div>
    )
}

export default observer(Buttons)