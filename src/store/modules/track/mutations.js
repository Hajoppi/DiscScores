/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import {
  INCREMENT,
  DECREMENT,
} from './mutation-types';

export default {
  [INCREMENT](state, index) {
    Vue.set(state.holes, index, state.holes[index] + 1);
  },

  [DECREMENT](state, index) {
    if (state.holes[index] > 0) {
      Vue.set(state.holes, index, state.holes[index] - 1);
    }
  },
};
