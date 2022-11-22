import Header from "./Header";
import {FC} from "react";
import {layoutProps} from "../types/types";

const Layout: FC<layoutProps> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout;
