import React, {FC, useState} from 'react';
import cn from "classnames";
import styles from "./TabBlock.module.css";
import FinancialAid from "../FinancialAid/FinancialAid";

const TabBlock: FC = () => {
    const [chosenTab, setChosenTab] = useState<number>(1);

    return (
        <div className={styles.tabBlock}>
            <div className={styles.tabContainer}>
                <div
                    className={chosenTab === 1 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(1)}
                >
                    Зробити
                </div>
                <div
                    className={chosenTab === 2 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(2)}
                >
                    Фінансова допомога
                </div>
                <div
                    className={chosenTab === 3 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(3)}
                >
                    Матеріальна допомога
                </div>
                <div
                    className={chosenTab === 4 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(4)}
                >
                    Волонтерство
                </div>
            </div>
            <div className={chosenTab === 1 ? cn(styles.content, styles.activeContent) : styles.content}>
                first content
            </div>
            <div className={chosenTab === 2 ? cn(styles.content, styles.activeContent) : styles.content}>
               <FinancialAid/>
            </div>
            <div className={chosenTab === 3 ? cn(styles.content, styles.activeContent) : styles.content}>
                third content
            </div>
            <div className={chosenTab === 4 ? cn(styles.content, styles.activeContent) : styles.content}>
                4 content
            </div>
        </div>
    );
};

export default TabBlock;