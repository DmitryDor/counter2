import styles from "../../App.module.css";
import React from "react";
import {ButtonPropsType} from "./count2";

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={styles.button}
                onClick={props.value}
                disabled={props.error || props.disable || props.count === 0}>{props.title} </button>
    )
}