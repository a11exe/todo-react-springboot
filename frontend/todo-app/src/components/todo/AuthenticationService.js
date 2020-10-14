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
}

export default new AuthenticationService()