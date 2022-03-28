import { Field } from 'formik';
import React, {FC} from 'react';
import styles from "./CharityForm.module.css";

export type InputFieldProps = {
    value: string,
    name: string,
    style?: object;
}

const InputField: FC<InputFieldProps> = ({value, name, style}) => {
    return (
        <div className={styles.inputField} style={style}>
            <label htmlFor={value}>{name}</label>
            <Field id={value} name={value} />
        </div>
    );
};

export default InputField;