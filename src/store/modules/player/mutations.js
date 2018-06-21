/* ============
 * Mutations for the player module
 * ============
 *
 * The mutations that are available on the
 * player module.
 */

import {
  ALL,
  UPDATE,
  SAVE,
} from './mutation-types';

export default {
  [ALL](state, players) {
    state.players = players;
  },

  [UPDATE](state, track) {
    state.players.forEach((x) => {
      x.scores = track.holes.slice(0);
    });
  },

  [SAVE](state, player) {
    state.players.push(player);
  },
};
