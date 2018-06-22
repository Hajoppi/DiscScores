/* ============
 * Mutations for the player module
 * ============
 *
 * The mutations that are available on the
 * player module.
 */
import {
  ALL,
  ADD,
  REMOVE,
} from './mutation-types';

export default {
  [ALL](state, players) {
    state.players = players;
  },

  [ADD](state, player) {
    if (player.name !== '') {
      state.players.push(player);
    }
  },

  [REMOVE](state, player) {
    for (let i = 0; i < state.players.length; i += 1) {
      if (state.players[i].name === player.name) {
        state.players.splice(i, 1);
        break;
      }
    }
  },
};
