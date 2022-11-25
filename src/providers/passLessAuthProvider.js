import Cookies from '../helpers/Cookies'


const authProvider = {
    // send username and password to the auth server and get back credentials
    // currently using Passwordless plugin
    login: ({ username, password }) => {
        return Promise.reject();
    },
    // when the dataProvider returns an error, check if this is an authentication error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            Cookies.deleteCookie('token');
            Cookies.deleteCookie('role');
            Cookies.deleteCookie('user');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // when the user navigates, make sure that their credentials are still valid
    checkAuth: () => {
        return Cookies.getCookie('token') ? Promise.resolve() : Promise.reject();
    },
    // remove local credentials and notify the auth server that the user logged out
    logout: () => {
        Cookies.deleteCookie('token');
        Cookies.deleteCookie('role');
        Cookies.deleteCookie('user');
        return Promise.resolve();
    },
    // get the user's profile
    getIdentity: () => {
        const user = Cookies.getCookie('user');
        return user ? Promise.resolve(user) : Promise.reject();
    },
    getPermissions: () => {
        const role = Cookies.getCookie('role');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};


export default authProvider;