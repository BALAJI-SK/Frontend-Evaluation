export const BACKENDBASEURL = 'http://localhost:8080/';
export const AUTHBASEURL = 'http://localhost:5000/';

export function LOGIN (email, password) {
    return {
        url: 'auth/login',
        method: 'POST',
        baseURL: AUTHBASEURL,
        body: {
            username: email,
            password:password
        }
    };
}