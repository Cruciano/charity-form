import React, {FC, useState} from 'react';
import cn from "classnames";
import styles from "./TabBlock.module.css";
import FinancialAid from "../FinancialAid/FinancialAid";
import FakeAid from "../FakeAid/FakeAid";

const TabBlock: FC = () => {
    const [chosenTab, setChosenTab] = useState<number>(1);

    return (
        <div className={styles.tabBlock}>
            <div className={styles.tabContainer}>
                <div
                    className={chosenTab === 1 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(1)}
                >
                    <div className={styles.imageContainer}>
                        <div className={cn(styles.image, styles.hand)}></div>
                    </div>
                    <p>Зробити</p>
                </div>
                <div
                    className={chosenTab === 2 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(2)}
                >
                    <div className={styles.imageContainer}>
                        <div className={cn(styles.image, styles.wallet)}></div>
                    </div>
                    <p>Фінансова<br/>допомога</p>
                </div>
                <div
                    className={chosenTab === 3 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(3)}
                >
                    <div className={styles.imageContainer}>
                        <div className={cn(styles.image, styles.clothes)}></div>
                    </div>
                    <p>Матеріальна<br/>допомога</p>
                </div>
                <div
                    className={chosenTab === 4 ? cn(styles.item, styles.activeTab) : styles.item}
                    onClick={() => setChosenTab(4)}
                >
                    <div className={styles.imageContainer}>
                        <div className={cn(styles.image, styles.heart)}></div>
                    </div>
                    <p>Волонтерство</p>
                </div>
            </div>
            <div className={chosenTab === 1 ? cn(styles.content, styles.activeContent) : styles.content}>
                <FakeAid/>
            </div>
            <div className={chosenTab === 2 ? cn(styles.content, styles.activeContent) : styles.content}>
                <FinancialAid/>
            </div>
            <div className={chosenTab === 3 ? cn(styles.content, styles.activeContent) : styles.content}>
                <FakeAid/>
            </div>
            <div className={chosenTab === 4 ? cn(styles.content, styles.activeContent) : styles.content}>
                <FakeAid/>
            </div>
        </div>
    );
};

export default TabBlock;