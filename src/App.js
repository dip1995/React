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
import ReactDOM from "react-dom/client"
import AppLayout from "./components/AppLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);