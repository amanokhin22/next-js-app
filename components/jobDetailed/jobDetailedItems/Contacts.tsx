import styles from "../../../styles/jobDetailed.module.scss";
import Image from "next/image";
import Location from "../../../public/icons/location.svg";
import Map from "../../../public/icons/map.svg";
import {FC} from "react";
import {JobDetailedTypes} from "../../../types/types";

export const Contacts: FC<JobDetailedTypes> = ({jobItem}) => {
    return (
        <div>
            <div className={styles.firstPartOfContacts}>
                <div className={styles.headlinesContactsContainer}>
                    <span className={styles.headlinesContacts}>
                    Department name.
                    </span>
                    <span className={styles.headlinesContacts}>
                    {jobItem.name}
                    </span>
                </div>
                <div>
                    <div className={styles.locationAndAddress}>
                        <Image className={styles.iconLocation} src={Location} alt=""/>
                        <span className={styles.address}> {jobItem.address} </span>
                    </div>
                    <span className={styles.phonePost}> {jobItem.phone} </span>
                    <span className={styles.phonePost}> {jobItem.email} </span>
                </div>
            </div>
            <div className={styles.mapDescription}>
                <Image className={styles.map} src={Map} alt=""/>
                <Image className={styles.iconLocationInMap} src={Location} alt=""/>
            </div>
        </div>
    )
};
