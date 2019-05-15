/* ============
 * Actions for the game module
 * ============
 *
 * The actions that are available on the
 * game module.
 */

import Proxy from '/proxies/Proxy';
import * as types from './mutation-types';

export const start = ({ commit }, data) => {
  commit(types.START, data);
};
export const increment = ({ commit }, player) => {
  commit(types.INCREMENT, player);
};

export const decrement = ({ commit }, player) => {
  commit(types.DECREMENT, player);
};

export const nextHole = ({ commit }) => {
  commit(types.NEXT);
};

export const previousHole = ({ commit }) => {
  commit(types.PREVIOUS);
};
export const save = ({ commit, state }) => {
  const course = state.selectedCourse.id;
  const users = state.players;
  console.log(course, users);
  return new Proxy('game').create({ course, users}).then(() => {
    commit(types.SAVE);
  });
};
export const remove = ({ commit }, game) => {
  commit(types.REMOVE, game);
};

export default {
  start,
  increment,
  decrement,
  nextHole,
  previousHole,
  save,
  remove,
};
