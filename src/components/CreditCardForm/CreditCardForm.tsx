import React, {FC, isValidElement, useEffect, useState} from 'react';
import styles from "./CreditCardForm.module.css";

const CreditCardForm: FC = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [tetrad1, setTetrad1] = useState<string>('');
    const [tetrad2, setTetrad2] = useState<string>('');
    const [tetrad3, setTetrad3] = useState<string>('');
    const [tetrad4, setTetrad4] = useState<string>('');

    const [validity, setValidity] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        const value: string = e.target.value;

        if(!isNaN(Number(value))) {
            if(value.length === 4) {
                //@ts-ignore
                e.target.nextSibling.focus();
            }
            if(value.length === 0 && e.target.previousSibling) {
                //@ts-ignore
                e.target.previousSibling.focus();
            }

            set(value);
        }
    }

    useEffect(() => {
        setCardNumber(`${tetrad1}${tetrad2}${tetrad3}${tetrad4}`);
    }, [tetrad1, tetrad2, tetrad3, tetrad4])

    return (
        <div>
            <p>Введіть наступні данні</p>
            <div className={styles.card}>
                <input type="text" value={tetrad1} maxLength={4} onChange={e => onChangeHandle(e, setTetrad1)}/>
                <input type="text" value={tetrad2} maxLength={4} onChange={e => onChangeHandle(e, setTetrad2)}/>
                <input type="text" value={tetrad3} maxLength={4} onChange={e => onChangeHandle(e, setTetrad3)}/>
                <input type="text" value={tetrad4} maxLength={4} onChange={e => onChangeHandle(e, setTetrad4)}/>
                <p>Тернін дії</p>
                <input type="text" value={validity} onChange={e => setValidity(e.target.value)}/>
                <p>CVC/CVV</p>
                <input type="text" value={cvv} onChange={e => setCvv(e.target.value)}/>
            </div>
        </div>
    );
};

export default CreditCardForm;