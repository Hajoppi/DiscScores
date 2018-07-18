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
import track from './modules/track';
import player from './modules/player';
import game from './modules/game';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({

  mutations: {
    initStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        // Make also sure that no key is overridden
        const savedState = JSON.parse(localStorage.getItem('store'));
        Object.keys(state).forEach((key) => {
          if (!(key in savedState)) {
            savedState[key] = state[key];
          }
          Object.keys(state[key]).forEach((child) => {
            if (!(child in savedState[key])) {
              savedState[key][child] = state[key][child];
            }
          });
        });
        this.replaceState(
          Object.assign(state, savedState),
        );
      }
    },
  },
  /**
   * Assign the modules to the store.
   */
  modules: {
    account,
    auth,
    track,
    player,
    game,
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
