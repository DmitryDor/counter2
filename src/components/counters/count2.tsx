import styles from "../../App.module.css";
import React from "react";
import {SetValueType} from "./count1";
import {Button} from "./Button";

type PropsType = {
    count: number
    increment: () => void
    maxValue: number
    clear: () => void
    error: boolean
}
export type IcrementType = () => void
export type ClearType = () => void

export const Count2 = (props: PropsType) => {

    const increment: IcrementType = () => {
        props.increment()
    }

    const clear: ClearType = () => {
        props.clear()
    }


    return (
        <div>
            <div className={styles.output}>
                <input
                    type="text" value={props.error ? 'Incorrect value' : props.count}
                    className={props.count === props.maxValue ? `${styles.input} ${styles.inputError}` : styles.input}
                />
            </div>
            <div className={styles.output}>
                {/*<button className={styles.button} onClick={increment}
                        disabled={props.count === props.maxValue || props.error}>increment
                </button>
                <button className={styles.button}
                        onClick={clear}
                        disabled={props.count === 0 || props.error}
                >reset
                </button>*/}
                <Button title={'increment'} value={props.increment} disable={props.count === props.maxValue || props.error}/>
                <Button title={'reset'} value={props.clear} disable={props.count === 0 || props.error}/>
            </div>
        </div>
    )
}

export type ButtonPropsType = {
    title: string
    value: SetValueType | IcrementType | ClearType
    error?: boolean
    disable?: boolean
    count?: number
    maxValue?: number
}

