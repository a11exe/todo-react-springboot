import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'alabra',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    render() {
        return (
            <div className="container">
                {/*<ShowSuccessMessages showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {/*<ShowInvalidCredentionals hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>Invalid credentials</div>}
                {this.state.showSuccessMessage && <div>Login successful</div>}
                User name: <input type="text" name="username" defaultValue={this.state.username}
                                  onChange={this.handleChange}/>
                password: <input type="password" name="password" defaultValue={this.state.password}
                                 onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>login</button>
            </div>
        )
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    loginClicked() {
        console.log(this.state)
        // if (this.state.username === 'alabra' && this.state.password === '1234') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     // this.setState({hasLoginFailed: false})
        //     // this.setState({showSuccessMessage: true})
        // } else {
        //     // this.setState({hasLoginFailed: true})
        //     // this.setState({showSuccessMessage: false})
        // }
        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(
        //         () => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //             this.props.history.push(`/welcome/${this.state.username}`)
        //         }
        //     ).catch(
        //         () => {
        //             this.setState({hasLoginFailed: true})
        //             this.setState({showSuccessMessage: false})
        //         }
        //     )
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
                    this.props.history.push(`/welcome/${this.state.username}`)
                }
            ).catch(
            () => {
                this.setState({hasLoginFailed: true})
                this.setState({showSuccessMessage: false})
            }
        )
    }

}

export default LoginComponent