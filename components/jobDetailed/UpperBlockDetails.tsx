import styles from "../../styles/jobDetailed.module.scss";
import Image from "next/image";
import Bookmark from "../../public/icons/bookmark.svg";
import Share from "../../public/icons/share.svg";

export const UpperBlockDetails = () => {
    return (
        <>
            <div className={styles.jobDetails}>
                    <span className={styles.jDLable}>Job Details</span>
                    <div className={styles.saveShare}>
                        <div className={styles.save}>
                            <Image className={styles.iconSave} src={Bookmark} alt={""}/>
                            <p className={styles.saveText}>Save to my list</p>
                        </div>
                        <div className={styles.share}>
                            <Image className={styles.iconShare} src={Share} alt={""}/>
                            <p className={styles.shareText}>Share</p>
                        </div>
                    </div>
            </div>
            <button className={styles.upperButton}>APPLY NOW</button>
        </>
    )
}