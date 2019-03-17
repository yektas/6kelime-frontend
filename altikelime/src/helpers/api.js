import React from 'react';
import userStore from '../stores/userStore';
import Cookies from 'js-cookie';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'tr',
};

const BASE_URL = 'http://127.0.0.1:8000';

class API {
    request(method, path, body, isFullPath = false) {
        return new Promise((resolve, reject) => {
            let url = `${BASE_URL}${path}`;
            const requestParams = {
                method,
                headers: HEADERS,
                body: undefined,
            };
            console.log(Cookies.get('token'))
            if (Cookies.get('token')) {
                requestParams.headers.Authorization = `Token ${Cookies.get('token')}`;
            }
            if (body) {
                requestParams.body = JSON.stringify(body);
            }
            url = isFullPath ? path : url;
            fetch(url, requestParams)
                .then((response) => {
                    if (response.status < 300) {
                        if (response._bodyInit === '') {
                            return resolve(true);
                        } else {
                            return resolve(response.json());
                        }
                    } else {
                        response.json().then((errorResponse) => {
                            return reject(errorResponse);
                        }).catch((error) => {
                            return reject(error);
                        });
                    }
                }).catch((err) => {
                    return reject(err);
                });
        });
    }
}

const api = new API();
export default api;