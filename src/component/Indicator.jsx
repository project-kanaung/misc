import React, { Component } from 'react'
import { CounterStore } from '../store/counterStore'
import { observer } from 'mobx-react-lite'

const Indicator = () => {
    return (
        <div>
            { CounterStore.count }
        </div>
    )
}

export default observer(Indicator)
