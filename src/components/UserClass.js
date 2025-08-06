import { Component } from 'react';

class UserClass extends Component {
    constructor(props){
        super(props);
        console.log(this.props.name + ' constructor called');
    }

    componentDidMount(){
        console.log(this.props.name + ' componentDidMount called');
    }

    render(){
        console.log(this.props.name + ' render called');
        return (
            <div className="user-container">
                <h1>{this.props.name}</h1>
                <p>This is a user component</p>
            </div>
        )
    }
}

export default UserClass;