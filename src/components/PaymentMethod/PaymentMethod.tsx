import React, {FC, useContext, useState} from 'react';
import cn from "classnames";
import mastercard from "./images/mastercard.svg";
import visa from "./images/visa.svg";
import privat24 from "./images/privat24.svg";
import terminal from "./images/terminal.svg";
import webmoney from "./images/webmoney.svg";
import paypal from "./images/paypal.svg";
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
                    <div className={styles.imgGroup}>
                        <img height="32" src={mastercard} alt="mastercard"/>
                        <img height="32" src={visa} alt="visa"/>
                    </div>
                    <p>Карта Visa/Mastercard</p>
                </div>
                <div
                    className={active === 2 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(2);
                        setField("method", paymentMethod.privat24)
                    }}
                >
                    <div className={styles.imgGroup}>
                        <img height="32" src={privat24} alt="privat24"/>
                    </div>
                    <p>Приват24</p>
                </div>
                <div
                    className={active === 3 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(3);
                        setField("method", paymentMethod.terminal)
                    }}
                >
                    <div className={styles.imgGroup}>
                        <img height="32" src={terminal} alt="terminal"/>
                    </div>
                    <p>Термінали України</p>
                </div>
                <div
                    className={active === 4 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(4);
                        setField("method", paymentMethod.webmoney)
                    }}
                >
                    <div className={styles.imgGroup}>
                        <img height="32" src={webmoney} alt="webmoney"/>
                    </div>
                    <p>Webmoney</p>
                </div>
                <div
                    className={active === 5 ? cn(styles.method, styles.active) : styles.method}
                    onClick={() => {
                        setActive(5);
                        setField("method", paymentMethod.paypal)
                    }}
                >
                    <div className={styles.imgGroup}>
                        <img height="32" src={paypal} alt="paypal"/>
                    </div>
                    <p>PayPal</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;