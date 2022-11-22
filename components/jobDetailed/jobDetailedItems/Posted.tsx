import styles from "../../../styles/jobDetailed.module.scss";
import moment from "moment";
import {FC} from "react";
import {PostedJobTypes} from "../../../types/types";

export const Posted: FC<PostedJobTypes> = ({updatedAt}) => {
    const date = new Date(updatedAt);
    const now = moment();
    const days = now.diff(date, "days");

    return (
        <div className={styles.posted}>
            <p>Posted {days} days ago</p>
        </div>
    )
};
