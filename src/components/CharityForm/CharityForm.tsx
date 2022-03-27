import React, {FC} from 'react';
import {Form, Formik, FormikHelpers} from 'formik';
import {schema} from "./validationSchema";
import InputField, {InputFieldProps} from "./InputField";

const fields: Array<InputFieldProps> = [
    { value: "name", name: "Ім'я"},
    { value: "surname", name: "Фамілія"},
    { value: "company", name: "Назва компанії, організації"},
    { value: "email", name: "Email-адрес"},
    { value: "phone", name: "Номер телефону"},
    { value: "country", name: "Країна"},
    { value: "city", name: "Місто"},
    { value: "state", name: "Штат, район"},
    { value: "address", name: "Адреса"},
    { value: "zipCode", name: "Поштовий індекс"},
]

const CharityForm: FC = () => {
    const initValues = fields.reduce((acc: object, field: InputFieldProps) => ({...acc, [field.value]:''}), {});

    type values = typeof initValues;

    const handleSubmit = (values: values, actions: FormikHelpers<values>) => {
        actions.setSubmitting(false);
        actions.resetForm();
        console.log(values);
    }

    return (
        <Formik
            initialValues={initValues}
            validationSchema={schema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
            <Form>
                {fields.map(field => <InputField key={field.value} value={field.value} name={field.name}/>)}

                <button type="submit">Допомогти</button>
            </Form>
        </Formik>
    );
};

export default CharityForm;