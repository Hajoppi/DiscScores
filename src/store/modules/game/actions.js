/* ============
 * Actions for the game module
 * ============
 *
 * The actions that are available on the
 * game module.
 */


import * as types from './mutation-types';

export const start = ({ commit }, player) => {
  commit(types.START, player);
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
export default {
  start,
  increment,
  decrement,
  nextHole,
  previousHole,
};
