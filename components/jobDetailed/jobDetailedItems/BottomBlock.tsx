import styles from "../../../styles/jobDetailed.module.scss";
import Image from "next/image";
import Link from "next/link";
import {JobDetailedTypes} from "../../../types/types";
import {FC} from "react";

export const BottomBlock: FC<JobDetailedTypes> = ({jobItem}) => {
    return (
        <div className={styles.additionalInfo}>
            <h1 className={styles.additionalInfoH1}>Additional info</h1>
            <h2 className={styles.additionalInfoH2}>Employment type</h2>
            <div className={styles.infoContainer}>
                {
                    jobItem.employment_type.map((type, index) => <div
                        key={index} className={styles.buttonEmployment}>{type} </div>)
                }
            </div>
            <h2 className={styles.benefitsH2}>Benefits</h2>
            <div className={styles.infoContainer}>
                {
                    jobItem.benefits.map((type, index) => <div
                        key={index} className={styles.buttonBenefits}>{type} </div>)
                }
            </div>

            <div>
                <div className={styles.attachedImagesText}>Attached images</div>
                <div className={styles.attachedImages}>
                    <div className={styles.allImages}>
                        {
                            jobItem.pictures.map((src, index) =>
                                <Image key={index}
                                       className={styles.images}
                                       src={src}
                                       alt={""}
                                       width={209}
                                       height={115}
                                />)
                        }
                    </div>
                </div>
            </div>

            <Link href={`/`}>
                <button
                    className={styles.returnButton}>
                    RETURN TO JOB BOARD
                </button>
            </Link>
        </div>
    )
};
