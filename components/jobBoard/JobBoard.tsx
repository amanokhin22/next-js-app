import styles from "../../styles/jobBoard.module.scss";
import JobListItem from "./jobListItem/JobListItem";
import {useEffect, useState} from "react";
import {JobItem} from "../../types/types";
import {jobsApi} from "../../api/jobsApi";
import {Pagination} from "../Pagination";


const JobBoard = () => {
    const [jobs, setJobs] = useState<JobItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    // const jobItem = useAppSelector(selectJobs)
    //const dispatch = useAppDispatch();

    useEffect(() => {
       //dispatch(fetchJobs())

        jobsApi.getAll().then(data => {
            setJobs(data);
            setLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangePage = (page: number) => {
        setCurrentPage(page)
    };

    const itemsPerPage = 10;
    const pagesCount = Math.ceil(jobs.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const pageJobs = jobs.slice(start, start + itemsPerPage);

    return (
        <div className={styles.boardAndPagination}>
            <div>
                {loading ? "Loading..." : (
                    <ul className={styles.jobBoard}>
                        {pageJobs.map((jobItem) => <li key={jobItem.id}>
                                <JobListItem jobItem={jobItem}/>
                            </li>
                        )}
                    </ul>
                )}
            </div>
            {pagesCount > 1 ?
                <Pagination currentPage={currentPage} onChangePage={onChangePage} pagesCount={pagesCount}/> : ""}
        </div>
    )
}

export default JobBoard;
