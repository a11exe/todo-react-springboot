import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {
            welcomeMessage : ''
        }
    }


    render() {
        return <div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {this.props.match.params.name}.
                You can manage your todos <Link to="/todos">here</Link>
            </div>
            <div className="container">
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get welcome message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
        </div>
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        //     .then(response => this.handleSuccessfullResponse(response))
        //     .catch();
        HelloWorldService.executeHelloWorldBeanService(this.props.match.params.name)
            .then(response => this.handleSuccessfullResponse(response))
            .catch(error => this.handleError(error));
    }

    handleSuccessfullResponse(response){
        this.setState(
            {welcomeMessage: response.data.message}
        );
    }

    handleError(error) {
        let errorMsg = '';
        if (error.message) {
            errorMsg += error.message
        }
        if (error.response && error.response.data) {
            errorMsg += error.response.data.message
        }
        this.setState(
            {welcomeMessage:  errorMsg}
        );
    }
}



export default WelcomeComponent