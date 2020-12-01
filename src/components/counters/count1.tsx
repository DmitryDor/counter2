import styles from "../../App.module.css";
import React, {ChangeEvent} from "react";
import {Button} from "./Button";


type PropsType = {
    startValue: number
    maxValue: number
    setValue: () => void
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    error: boolean
    disable: boolean
}
export  type SetValueType = () => void

export const Count1 = (props: PropsType) => {




    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+e.currentTarget.value)

    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }

    const setValue: SetValueType = () => {
        props.setValue()

    }


    return (
        <div>
            <div className={styles.output}>
                max value:
                <input type="number" value={props.maxValue}
                       className={styles.input}
                       onChange={onChangeMaxValue}/>
                start value:
                <input type="number" value={ props.startValue}
                       // className={error ? `${styles.input} ${styles.inputError}` : styles.input}
                       className={styles.input}
                       onChange={onChangeStartValue}
                />
            </div>
            <div className={styles.output}>
                <Button title={'Set'} value={setValue} disable={props.error || props.disable}/>
            </div>
        </div>
    )
}