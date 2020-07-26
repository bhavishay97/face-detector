import http from './httpService';
import { API } from '../backend';

const registerAPI = `${API}/users/register`;

export function register(user) {
  return http.post(registerAPI, user);
}
