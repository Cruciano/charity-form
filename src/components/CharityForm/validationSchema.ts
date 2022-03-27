import * as Yup from 'yup';

export const schema =  Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    surname: Yup.string()
        .required('Required'),
    company: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email()
        .required('Required'),
    phone: Yup.string()
        .matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/)
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    address: Yup.string()
        .required('Required'),
    zipCode: Yup.string()
        .required('Required'),
});