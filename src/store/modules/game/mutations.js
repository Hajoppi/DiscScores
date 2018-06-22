/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */
import Vue from 'vue';

import {
  START,
  INCREMENT,
  DECREMENT,
  PREVIOUS,
  NEXT,
} from './mutation-types';

export default {

  [START](state, players) {
    state.players = players;
    state.players.forEach((x) => {
      x.scores = this.state.track.selectedTrack.holes.slice(0);
    });
  },

  [INCREMENT](state, player) {
    const scores = player.scores;
    Vue.set(scores, state.currentHole, scores[state.currentHole] + 1);
  },

  [DECREMENT](state, player) {
    const scores = player.scores;
    Vue.set(scores, state.currentHole, scores[state.currentHole] - 1);
  },

  [PREVIOUS](state) {
    if (state.currentHole > 0) {
      state.currentHole -= 1;
    }
  },

  [NEXT](state) {
    if (state.currentHole < this.state.track.selectedTrack.holes.length - 1) {
      state.currentHole += 1;
    }
  },
};
