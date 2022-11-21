import Head from "next/head";
import JobDetailed from "../../components/jobDetailed/JobDetailed";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {JobItem} from "../../types/types";
import {jobsApi} from "../../api/jobsApi";

export const JobDetailedPage = () => {
    const router = useRouter()
    const {id} = router.query

    const [job, setJob] = useState<JobItem | null>(null);

    useEffect(() => {
        jobsApi.getById(id as string).then(data => setJob(data))
    }, [id])


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