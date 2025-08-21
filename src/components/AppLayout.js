import Header from "./Header";
import { Outlet } from "react-router";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const AppLayout = () => {
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    return(
        <UserContext.Provider value={{loggedInUser:'Diptesh'}}>
        <div className="app-layout">
            {/* <UserContext.Provider value={{loggedInUser:'Shah'}}> */}
            <Header />
            {/* </UserContext.Provider> */}
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}
export default AppLayout;