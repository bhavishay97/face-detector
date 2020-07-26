import http from './httpService';
import { API } from '../backend';

const authAPI = `${API}/auth/login`;

export function login(user) {
  return http.post(authAPI, user);
}

export function loginWithJWT(jwt) {
  localStorage.setItem('token', jwt);
}

export default {
  login,
  loginWithJWT,
};
