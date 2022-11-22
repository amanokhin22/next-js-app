import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";
import {store} from "../app/store";
import {Provider} from "react-redux";

const App = ({Component, pageProps}: AppProps) => (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
);

export default App;
