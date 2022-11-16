import Cookies from './helpers/Cookies'
import URL from './URL';

const authProvider = {
    // send username and password to the auth server and get back credentials
    login: ({ username, password }) => {
        const identifier = username // strapi expects 'identifier' and not 'username'
        const request = new Request(`${URL}/auth/local`, {
            method: 'POST',
            body: JSON.stringify({ identifier, password }),
            headers: new Headers({ 'Content-Type': 'application/json'})
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .catch((error) => {                
                throw new Error('El identificador o la contraseña no son válidos');
            })
            .then(response => {
                Cookies.setCookie('token', response.jwt, 1);

                const request = new Request(`${URL}/users/me?populate=role`, {
                    method: 'GET',
                    headers: new Headers({
                        Accept: 'application/json',
                        Authorization: `Bearer ${response.jwt}`
                    }),
                });
                return fetch(request)
                    .then(response => {
                        if (response.status < 200 || response.status >= 300) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch((error) => {                
                        throw new Error('El identificador o la contraseña no son válidos');
                    })
                    .then(response => {
                        Cookies.setCookie('role', response.role.name, 1);
                    });
            });
    },
    // when the dataProvider returns an error, check if this is an authentication error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            Cookies.deleteCookie('token');
            Cookies.deleteCookie('role');
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