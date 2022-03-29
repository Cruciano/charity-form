import React, {FC, useContext, useEffect, useState} from 'react';
import styles from "./CreditCardForm.module.css";
import {FormContext} from "../CharityForm/CharityForm";

const CreditCardForm: FC = () => {
    const setField = useContext(FormContext);

    const [tetrad1, setTetrad1] = useState<string>('');
    const [tetrad2, setTetrad2] = useState<string>('');
    const [tetrad3, setTetrad3] = useState<string>('');
    const [tetrad4, setTetrad4] = useState<string>('');

    const [validity, setValidity] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        const value: string = e.target.value;

        if (!isNaN(Number(value))) {
            if (value.length === 4) {
                //@ts-ignore
                e.target.nextSibling.focus();
            }
            if (value.length === 0 && e.target.previousSibling) {
                //@ts-ignore
                e.target.previousSibling.focus();
            }
            set(value);
        }
    }

    useEffect(() => {
        setField("creditCard", {
            number: `${tetrad1}${tetrad2}${tetrad3}${tetrad4}`,
            validity: validity,
            cvv: cvv,
        });
    }, [tetrad1, tetrad2, tetrad3, tetrad4, validity, cvv])


    return (
        <div>
            <p>Введіть наступні данні</p>
            <div className={styles.card}>
                <label>Номер карти</label>
                <input className={styles.numberInput} type="text" value={tetrad1} maxLength={4}
                    onChange={e => onChangeHandle(e, setTetrad1)} />
                <input className={styles.numberInput} type="text" value={tetrad2} maxLength={4}
                    onChange={e => onChangeHandle(e, setTetrad2)} />
                <input className={styles.numberInput} type="text" value={tetrad3} maxLength={4}
                    onChange={e => onChangeHandle(e, setTetrad3)} />
                <input className={styles.numberInput} type="text" value={tetrad4} maxLength={4}
                    onChange={e => onChangeHandle(e, setTetrad4)} />

                <div className={styles.infoInput}>
                    <label>Тернін дії</label>
                    <input type="text" value={validity} maxLength={5} onChange={e => setValidity(e.target.value)}/>
                </div>
                <div className={styles.infoInput}>
                    <label>CVC/CVV</label>
                    <input type="text" value={cvv} maxLength={3} onChange={e => setCvv(e.target.value)}/>
                </div>
            </div>
        </div>
    );
};

export default CreditCardForm;