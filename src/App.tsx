import React, {useState} from "react";
import styles from './App.module.css'
import {Count1} from "./components/counters/count1";
import {Count2} from "./components/counters/count2";


export const App = () => {

    let initialMax = Number(localStorage.getItem('maxValue'))
    let initialStart = Number(localStorage.getItem('startValue'))

    let [maxValue, setMaxValue] = useState( initialMax > 0 ? initialMax : 0)

    let [startValue, setStartValue] = useState<number>(initialStart > 0 ? initialStart : 0)

    let [error, setError] = useState<boolean>(false)

    let [disable, setDisable] = useState<boolean>(false)


    const changeMaxValue = (value: number) => {

        if (value > startValue) {
            setError(false)
            setMaxValue(value)
            setDisable(false)
        } else {
            setError(true)
            setMaxValue(value)

        }
    }

    const changeStartValue = (value: number) => {
        if (value >= 0 && value < maxValue) {
            setError(false)
            setStartValue(value)
            setDisable(false)
        } else {
            setError(true)
            setStartValue(value)
        }
    }

    let [count, setCount] = useState<number>(0)

    const setValue = () => {
        setCount(startValue)
        setDisable(true)
        localStorage.setItem('startValue', startValue.toString())
        localStorage.setItem('maxValue', maxValue.toString())
    }

    const increment = () => {
        setCount(count + 1)
    }
    const clear = () => {
        setCount(0)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <Count1 startValue={startValue} maxValue={maxValue}
                        changeStartValue={changeStartValue}
                        changeMaxValue={changeMaxValue}
                        setValue={setValue}
                        error={error}
                        disable={disable}

                />
            </div>
            <div className={styles.block}>
                <Count2 count={count} increment={increment}
                        maxValue={maxValue} clear={clear}
                        error={error}
                />
            </div>
        </div>
    )
}


