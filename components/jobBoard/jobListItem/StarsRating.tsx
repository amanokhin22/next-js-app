import * as React from 'react';
import {useState} from "react";
import styles from "../../../styles/jobBoard.module.scss";
import star from "../../../public/icons/star.svg";
import Image from "next/image";

export interface StarsRatingProps {

}


export const StarsRating = () => {
    const [stars, setStars] = useState(5);


    return (
        <ul className={styles.rating}>
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            <Image  src={star} alt="{}" />
            {
                (new Array(stars)).map((_, index) => <li key={index}> {index} </li> )
            }
        </ul>


    );
}