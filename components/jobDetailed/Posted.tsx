import styles from "../../styles/jobDetailed.module.scss";
import moment from "moment";
import {FC} from "react";

export interface PostedJobTypes {
    updatedAt: string;
}

export const Posted:FC<PostedJobTypes> = ({updatedAt}) => {
    const date = new Date(updatedAt);
    const now = moment();
    const days = now.diff(date, "days");


    return (
        <div className={styles.posted}>
            <p>Posted {days} days ago</p>
        </div>
    )
}