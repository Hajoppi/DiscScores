/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  ALL,
  SELECT,
} from './mutation-types';

export default {
  [ALL](state, tracks) {
    state.tracks = tracks;
  },

  [SELECT](state, index) {
    state.selectedTrack = state.tracks[index];
  },
};
