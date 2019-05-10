/* ============
 * Mutations for the group module
 * ============
 *
 * The mutations that are available on the
 * group module.
 */
import {
  ALL,
  ADD,
  REMOVE,
} from './mutation-types';

export default {
  [ALL](state, groups) {
    state.groups = groups;
  },

  [ADD](state, group) {
    console.log(group);
    if (group.name !== '') {
      state.groups.push(group);
    }
  },

  [REMOVE](state, group) {
    for (let i = 0; i < state.groups.length; i += 1) {
      if (state.groups[i].id === group.id) {
        state.groups.splice(i, 1);
        break;
      }
    }
  },
};
