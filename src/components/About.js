import {Component} from 'react';
import UserClass from './UserClass';

class About extends Component{

    constructor(props){
        super(props);
        console.log('parent constructor called');
        this.state = {
            title: 'About My App',
            description: 'This is a simple React application to demonstrate class components.',
            counter: 0
        }
    }

    async componentDidMount(){
        console.log('parent componentDidMount called'); 
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        console.log(json);
        this.setState({
            title: json.name,
            description: json.bio
        })
    }

    render(){
        console.log('parent render called');
        const { title, description,counter } = this.state;
    return (
        <div className="about-container">
            <h1>{title}</h1>
            <p>{description}</p>
            {/* <p>{counter}</p> */}
            <UserClass name={this.state.title} />
            {/* <UserClass name={'Second'} /> */}
            {/* <UserClass name={'Third'} /> */}
            {/* <button type="button" onClick={() =>  this.setState({
                title: 'Swiggy App',
                counter: counter + 1
            })}>change Title</button> */}
            </div>
    )
    }
} 

// const About = () => {
    // return (
    //     <div className="about-container">
    //         <h1>About Us</h1>
    //         <p>This is about My App</p>
    //         </div>
    // )
// }

export default About;