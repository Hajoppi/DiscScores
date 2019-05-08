/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import AuthProxy from '../../../proxies/AuthProxy';
import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }, payload) => {
  new Proxy()
    .register(payload)
    .then((response) => {
      commit(types.LOGIN, response);
    })
    .catch(() => {
    });
};

export const login = ({ commit }, payload) => {
  console.log(payload);
  new AuthProxy()
    .login(payload)
    .then((response) => {
      commit(types.LOGIN, response.id_token);
      Vue.$store.dispatch('account/find');
      Vue.router.push({
        name: 'home.index',
      });
    }).catch(() => {
    });
  Vue.router.push({
    name: 'home.index',
  });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
