import React from "react";

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.gettingGreeting}>
                <input type="text" name="name" placeholder="your name is"/>
                <button>Get greetings</button>
            </form>
        );
    }

}
export default Form;