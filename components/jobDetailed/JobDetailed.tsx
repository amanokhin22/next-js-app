import styles from "../../styles/jobDetailed.module.scss";
import {FC} from "react";
import {JobDetailedTypes} from "../../types/types";
import {Contacts} from "./jobDetailedItems/Contacts";
import {UpperBlockDetails} from "./jobDetailedItems/UpperBlockDetails";
import {JobDescriptionBlock} from "./jobDetailedItems/JobDescriptionBlock";
import {BottomBlock} from "./jobDetailedItems/BottomBlock";

const JobDetailed: FC<JobDetailedTypes> = ({jobItem}) => {
    return (
        <div className={styles.mainJobDetailed}>
            <div className={styles.descriptionBlock}>
                <UpperBlockDetails/>
                <JobDescriptionBlock jobItem={jobItem}/>
                <BottomBlock jobItem={jobItem}/>
            </div>
            <div className={styles.sideBar}>
                <Contacts jobItem={jobItem}/>
            </div>
        </div>
    )
}

export default JobDetailed;
