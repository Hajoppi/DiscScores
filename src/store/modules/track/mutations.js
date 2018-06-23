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
  SAVE,
  REMOVE,
} from './mutation-types';

export default {
  [ALL](state, tracks) {
    state.tracks = tracks;
  },

  [SELECT](state, index) {
    state.selectedTrack = state.tracks[index];
  },

  [SAVE](state, track) {
    state.tracks.push(track);
  },

  [REMOVE](state, track) {
    for (let i = 0; i < state.tracks.length; i += 1) {
      if (state.tracks[i].name === track.name) {
        state.tracks.splice(i, 1);
        break;
      }
    }
  },
};
