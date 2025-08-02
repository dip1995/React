// const header = React.createElement('h1',{
//     id:'heading', xyz:'abc'
// },'Hello World from React!');

// const Header =  () => <h1>Namaste React From JSX</h1>

// const HeadingComponent = () => {
//     return <div id="container">
//         <Header />
//         <h1>Namaste React From React Component</h1>
//     </div>
// }
// import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
