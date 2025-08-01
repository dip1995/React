import Header from "./Header";
import { Outlet } from "react-router";
const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    )
}
export default AppLayout;