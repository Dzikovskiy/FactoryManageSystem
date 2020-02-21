import React from 'react';
import './App.css';
import Form from "./Form";
class App extends React.Component {

    gettingGreeting = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        let user = {
            id: 7,
            name: '${name}'
        };
        const api_url = await fetch(`http://localhost:8080/greet`);
        let result = api_url.json();
        alert(result.message);
    };

    render() {
        return (
        <div>
            <Form gettingGreeting={this.gettingGreeting}/>
        </div>
        );

    }

}

export default App;
