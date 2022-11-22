import styles from "../../../styles/jobBoard.module.scss";
import {ItemControls} from "./ItemControls";
import {StarsRating} from "./StarsRating";
import Image from "next/image";
import Location from "../../../public/icons/location.svg";
import {FC} from "react";
import {JobItem} from "../../../types/types";
import Link from "next/link";

const JobListItem: FC<{ jobItem: JobItem }> = ({jobItem}) => {

    return (
        <div>
            <div className={styles.jobListItem}>
                <div className={styles.firstBlock}>
                    <div className={styles.widthImage}>
                        <Image className={styles.avatarsImage}
                               src={jobItem.pictures[0]}
                               alt=""
                               width={85}
                               height={85}
                        />
                    </div>
                    <div className={styles.content}>
                        <Link href={`/jobs/${jobItem.id}`}>
                            <h2 className={styles.upperText}> {jobItem.title} </h2>
                        </Link>
                        <p className={styles.downText}>Department name • {jobItem.name}</p>
                        <div className={styles.location}>
                            <div className={styles.location}>
                                <Image src={Location} alt=""/>
                                <span className={styles.address}>{jobItem.address}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sideBarOfItem}>
                    <StarsRating/>
                    <ItemControls updatedAt={jobItem.updatedAt}/>
                </div>

            </div>
        </div>
    )
}

export default JobListItem;
