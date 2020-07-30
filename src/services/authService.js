import http from './httpService';
import jwtDecode from 'jwt-decode';
import { API } from '../backend';

const authAPI = `${API}/auth/login`;

export function login(user) {
  return http.post(authAPI, user);
}

export function loginWithJWT(jwt) {
  localStorage.setItem('token', jwt);
}

export function logout() {
  localStorage.removeItem('token');
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
};
