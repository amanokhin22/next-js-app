import styles from "../../styles/jobBoard.module.scss";
import JobListItem from "./jobListItem/JobListItem";
import {useEffect} from "react";
import {Pagination} from "../Pagination";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchJobs} from "../../redux/asyncThunkJobs";
import {
    selectCurrentPage,
    selectLoading, selectPageCount, selectPageJobs,
} from "../../selectors/selectors";
import {setPage} from "../../redux/jobsSlice";

const JobBoard = () => {

    const currentPage = useAppSelector(selectCurrentPage);
    const loading = useAppSelector(selectLoading);
    const pageJobs = useAppSelector(selectPageJobs);
    const pagesCount = useAppSelector(selectPageCount);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(setPage(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangePage = (page: number) => {
        dispatch(setPage(page))
    };

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
