import Header from "./Header";
import { Outlet } from "react-router";
import { useContext, useState,useEffect } from "react";
import appStore from "../utils/appStore";

import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
const AppLayout = () => {
  const [userName, setUserName] = useState();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Diptesh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app-layout">
        {/* <UserContext.Provider value={{loggedInUser:'Shah'}}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
export default AppLayout;
