import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent />*/}
                {/*<WelcomeComponent />*/}
            </div>
        )
    }
}

// function ShowInvalidCredentionals(props){
//     if(props.hasLoginFailed === true) {
//         return <div>Invalid credentials</div>
//     }
//     return null
// }
//
// function ShowSuccessMessages(props){
//     if(props.showSuccessMessage === true) {
//         return <div>Login successful</div>
//     }
//     return null
// }

export default TodoApp