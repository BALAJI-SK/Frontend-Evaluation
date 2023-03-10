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
export function GET_ALL_CONTENTS () {
    return {
        url: 'content/get',
        method: 'GET',
        baseURL: BACKENDBASEURL,
        
    };
}
export function CREATE_CONTENT (data) {
    return {
        url: 'content/create',
        method: 'POST',
        baseURL: BACKENDBASEURL,
        data: data
    };
}
export function PUT_FIELD_BY_TYPENAME (data) {
    return {
        url: `content/update/${data.id}`,
        method: 'PUT',
        baseURL: BACKENDBASEURL,
        data: data,
    };
}

export function CREATE_FIELD (data) {
    return {
        url: `content/create/field/${data.id}`,
        method: 'POST',
        baseURL: BACKENDBASEURL,
        data: data
    };
}
export function DELETE_FIELD (contentID,data) {
    return {
        url: `content/delete/${contentID}`,
        method: 'DELETE',
        baseURL: BACKENDBASEURL,
        params:{
            fieldName:data,
        }
    };
}