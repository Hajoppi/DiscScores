/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */


import * as types from './mutation-types';

export const increment = ({ commit }, index) => {
  commit(types.INCREMENT, index);
};

export const decrement = ({ commit }, index) => {
  commit(types.DECREMENT, index);
};

export default {
  increment,
  decrement,
};
