import React from 'react';
import './App.css';
import Form from "./Form";
class App extends React.Component {

    gettingGreeting = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const api_url = await fetch(`http://localhost:8080/hello/${name}`);
        let result = await api_url.text();
        alert(result);
    };

    render() {
        const mystyle={
            width: "50%",
            border: "3px solid green",
            padding: "300px",
            margin: "70px"
        };
        return (
        <div style={mystyle}>
            <Form gettingGreeting={this.gettingGreeting}/>
        </div>
        );

    }

}

export default App;
