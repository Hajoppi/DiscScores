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
  JOIN,
  LEAVE,
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
  [JOIN](state, { user, group }) {
    for (let i = 0; i < state.groups.length; i += 1) {
      if(state.groups[i].id === group) {
        state.groups.members.push(user);
      }
    }
  },

  [LEAVE](state, { user, group }) {
    for (let i = 0; i < state.groups.length; i += 1) {
      if (state.groups[i].id === group.id) {
        for(let j = 0; j < state.groups.members.length; j += 1) {
          state.groups[i].members.splice(j, 1);
          break;
        }
      }
    }
  },
};
