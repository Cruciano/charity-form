import React, {FC, useContext, useState} from 'react';
import cn from "classnames";
import styles from "./PaymentMethod.module.css";
import {FormContext} from "../CharityForm/CharityForm";
import {paymentMethod} from "../../types/paymentMethod";

const PaymentMethod: FC = () => {
    const setField = useContext(FormContext);

    const [active, setActive] = useState<number>(0);

    return (
        <div>
            <p>Спосіб оплати</p>
            <div className={styles.container}>
                <div
                    className={active === 1 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(1);
                        setField("method", paymentMethod.card)
                    }}
                >
                    Карта Visa/Mastercard
                </div>
                <div
                    className={active === 2 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(2);
                        setField("method", paymentMethod.privat24)
                    }}
                >
                    Приват24
                </div>
                <div
                    className={active === 3 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(3);
                        setField("method", paymentMethod.terminal)
                    }}
                >
                    Термінали України
                </div>
                <div
                    className={active === 4 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(4);
                        setField("method", paymentMethod.webmoney)
                    }}
                >
                    Webmoney
                </div>
                <div
                    className={active === 5 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(5);
                        setField("method", paymentMethod.paypal)
                    }}
                >
                    PayPal
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;