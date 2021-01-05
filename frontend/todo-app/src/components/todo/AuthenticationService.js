import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth',
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    createBasicAuthToken(username,password) {
        console.log(username + ":" + password)
        return 'Basic ' +  window.btoa(username + ":" + password)
        // return 'Basic YWxhYnJhOjEyMzQ='
    }

    registerSuccessfulLogin(username,password){
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        // console.log(basicAuthHeader)
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    createJwtAuthToken(token){
        console.log("jwt token: " + token)
        return 'Bearer ' + token
    }

    registerSuccessfulLoginForJwt(username,token){
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        // console.log(basicAuthHeader)
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJwtAuthToken(token))
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()