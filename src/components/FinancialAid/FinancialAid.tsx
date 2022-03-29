import React, {FC} from 'react';
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import styles from "./FinancialAid.module.css";

const FinancialAid: FC = () => {
    return (
        <div className={styles.container}>
            <PaymentMethod />
            <CreditCardForm/>
        </div>
    );
};

export default FinancialAid;