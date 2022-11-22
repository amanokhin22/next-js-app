import Image from "next/image";
import rectangle from "../../../public/icons/rectangle.svg";
import styles from "../../../styles/jobBoard.module.scss";
import moment from "moment";
import {FC} from "react";
import {PostedJobTypes} from "../../../types/types";


export const ItemControls:FC<PostedJobTypes> = ({updatedAt}) => {
    const date = new Date(updatedAt);
    const now = moment();
    const days = now.diff(date, "days");

    return (
        <div className={styles.toggleItem}>
            <Image className={styles.rectangle} src={rectangle} alt="" />
            <p className={styles.posted}>Posted {days} days ago</p>
        </div>
    )
};
