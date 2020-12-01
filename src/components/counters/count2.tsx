import styles from "../../App.module.css";
import React, {useState} from "react";

type PropsType = {
    count: number
    increment: () => void
    maxValue: number
    clear: () => void
    error: boolean

}

export const Count2 = (props: PropsType) => {

    const increment = () => {
        props.increment()
    }

    const clear = () => {
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
                <button className={styles.button} onClick={increment}
                        disabled={props.count === props.maxValue || props.error}>increment
                </button>
                <button className={styles.button}
                        onClick={clear}
                        disabled={props.count === 0 || props.error}
                >reset
                </button>
            </div>
        </div>
    )
}