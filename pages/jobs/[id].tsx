import Head from "next/head";
import JobDetailed from "../../components/jobDetailed/JobDetailed";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setActiveJobId} from "../../redux/jobsSlice";
import {fetchJobs} from "../../redux/asyncThunkJobs";
import {selectActiveJob} from "../../selectors/selectors";

export const JobDetailedPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const job = useAppSelector(selectActiveJob);
    const {id} = router.query

    useEffect(() => {
        dispatch(setActiveJobId(id as string))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        dispatch(fetchJobs())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> Job Detailed </title>
            </Head>
            <div>
                {job ? <JobDetailed jobItem={job}/> : "loading..."}
            </div>
        </div>
    )
}

export default JobDetailedPage;
