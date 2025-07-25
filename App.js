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
import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
return (
    <div className="header-container">
        <div className="logo-container">
            <div className="logo">
                <img
                className="logo-image"
                src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="logo" />
                </div>
        </div>
        <div className="nav-items">
            <ul className="nav-list"> 
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
}
const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);