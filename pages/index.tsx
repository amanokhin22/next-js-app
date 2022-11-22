import Head from "next/head";
import JobBoard from "../components/jobBoard/JobBoard";

const Home = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> JOB BOARD </title>
            </Head>
            <div>
                <JobBoard/>
            </div>
        </div>
    )
}

export default Home;
