import styles from "../../styles/jobDetailed.module.scss";
import {FC} from "react";
import {JobDetailedTypes} from "../../types/types";
import {Posted} from "./Posted";


export const JobDescriptionBlock:FC<JobDetailedTypes> = ({jobItem}) => {
    return (
        <>
            <div className={styles.jobDescriptionsBlock}>
               <div className={styles.headOfDescription}>

                   <div className={styles.nameSalary}>
                       <div className={styles.jobName}>
                           {jobItem.title}
                       </div>
                       <div className={styles.bruttoNetto}>
                           <span className={styles.salary}>€{jobItem.salary}</span>
                           <span className={styles.brutto}>Brutto per year</span>
                       </div>
                   </div>

               </div>
                <Posted updatedAt={jobItem.updatedAt}/>
                <div className={styles.jobDescription}>{jobItem.description}</div>
                <button className={styles.bottomButton}>APPLY NOW</button>
            </div>

        </>
    )
}