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
  SAVE,
  REMOVE,
  ALL,
} from './mutation-types';

export default {
  [ALL](state, data) {
    state.pastGames = data;
  },
  [START](state, { players, course }) {
    state.currentHole = 0;
    state.players = players;
    state.selectedCourse = course.id;
    state.holeCount = course.holes.length;
    state.players.forEach((x) => {
      Vue.set(x, "scores", course.holes.slice(0));
    });
  },

  [SAVE](state) {
    const res = {
      date: (new Date()).toString().split(' ', 5).join(' '),
      playerScores: state.players,
      courseName: state.selectedCourse.name,
    };
    state.pastGames.push(res);
  },

  [REMOVE](state, game) {
    for (let i = 0; i < state.pastGames.length; i += 1) {
      if (state.pastGames[i].date === game.date) {
        state.pastGames.splice(i, 1);
        break;
      }
    }
  },

  [INCREMENT](state, player) {
    Vue.set(player.scores, state.currentHole, player.scores[state.currentHole] + 1);
  },

  [DECREMENT](state, player) {
    Vue.set(player.scores, state.currentHole, player.scores[state.currentHole] - 1);
  },

  [PREVIOUS](state) {
    if (state.currentHole > 0) {
      state.currentHole -= 1;
    }
  },

  [NEXT](state) {
    if (state.currentHole < state.holeCount - 1) {
      state.currentHole += 1;
    }
  },
};
