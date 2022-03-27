import { Field } from 'formik';
import React, {FC} from 'react';

export type InputFieldProps = {
    value: string,
    name: string,
}

const InputField: FC<InputFieldProps> = ({value, name}) => {
    return (
        <div>
            <label htmlFor={value}>{name}</label>
            <Field id={value} name={value} />
        </div>
    );
};

export default InputField;