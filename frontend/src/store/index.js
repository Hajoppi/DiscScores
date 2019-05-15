/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Modules
import account from './modules/account';
import auth from './modules/auth';
import course from './modules/course';
import player from './modules/player';
import game from './modules/game';
import group from './modules/group';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  mutations: {
    initStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('game')) {
        const savedState = JSON.parse(localStorage.getItem('game'));
        if (savedState !== null) Vue.set(state,'game', savedState);
      }
    },
  },
  /**
   * Assign the modules to the store.
   */
  modules: {
    account,
    auth,
    course,
    player,
    game,
    group,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : [],
});
