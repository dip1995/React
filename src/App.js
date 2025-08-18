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
// import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));

const About = lazy(() => import('./components/About'));
const Grocery = lazy(() => import('./components/Grocery'));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
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
