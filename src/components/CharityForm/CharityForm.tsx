import React, {FC} from 'react';
import {Form, Formik, FormikHelpers} from 'formik';
import {schema} from "./validationSchema";
import InputField, {InputFieldProps} from "./InputField";
import styles from "./CharityForm.module.css";
import TabBlock from "../TabBlock/TabBlock";

const fields: Array<InputFieldProps> = [
    {value: "name", name: "Ім'я"},
    {value: "surname", name: "Фамілія"},
    {value: "company", name: "Назва компанії, організації", style: {gridRow: 2, gridColumn: "span 2"}},
    {value: "email", name: "Email-адрес", style: {gridRow: 3, gridColumn: "span 2"}},
    {value: "phone", name: "Номер телефону", style: {gridRow: 4, gridColumn: "span 2"}},
    {value: "country", name: "Країна", style: {gridColumnStart: 4, gridColumnEnd: 6}},
    {value: "city", name: "Місто", style: {gridColumn: 4}},
    {value: "state", name: "Штат, район"},
    {value: "address", name: "Адреса", style: {gridColumnStart: 4, gridColumnEnd: 6}},
    {value: "zipCode", name: "Поштовий індекс", style: {gridColumn: 4}},
]

const CharityForm: FC = () => {
    const initValues = fields.reduce((acc: object, field: InputFieldProps) => ({...acc, [field.value]: ''}), {});
    initValues["logo"] = '';
    initValues["creditCard"] = '';

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
            {(formik) => (
                <Form className={styles.charityForm}>
                    <h1>Заповніть форму</h1>
                    <div className={styles.charityFormGrid}>
                        {fields.map(field =>
                            <InputField key={field.value} value={field.value} name={field.name} style={field.style}/>)}

                        <input
                            id="logo"
                            className={styles.inputLogo}
                            name="logo"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                            // @ts-ignore
                            formik.setFieldValue("file", e.currentTarget.files[0]);
                        }}/>
                        <label htmlFor="logo">+ Логотип</label>

                    </div>
                    <h1>Види допомоги</h1>
                    <h3>Ви можете змінити вид допомоги</h3>
                    <TabBlock/>
                    <button className={styles.submit} type="submit">Допомогти</button>
                </Form>
            )}
        </Formik>
    );
};

export default CharityForm;