import * as React from 'react';
import styles from "../../../styles/jobBoard.module.scss";
import star from "../../../public/icons/star.svg";
import Image from "next/image";

export const StarsRating = () => {

    return (
        <ul className={styles.rating}>
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
        </ul>
    );
};
