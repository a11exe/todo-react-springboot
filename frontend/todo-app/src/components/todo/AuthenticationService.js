class AuthenticationService {
    registerSuccessfulLogin(username){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
     sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('authenticatedUser') != null;
    }

    getLoggedInUserName() {
        return sessionStorage.getItem('authenticatedUser');
    }
}

export default new AuthenticationService()