import axios from 'axios';

export const ApiUrl = 'https://rentcar.free.beeceptor.com';

axios.defaults.baseURL = ApiUrl;

export function setToken(token) {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export function unsetToken() {
  axios.defaults.headers.Authorization = null;
}

export function setLocale(lng) {
  axios.defaults.headers.locale = lng;
}
