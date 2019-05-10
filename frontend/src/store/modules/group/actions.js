/* ============
 * Actions for the group module
 * ============
 *
 * The actions that are available on the
 * group module.
 */

// import Vue from 'vue';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  new Proxy('/groups').all().then((response) => {
    commit(types.ALL, GroupsTransformer.fetchCollection(response));
  });
};

export const add = ({ commit }, group) => {
  new Proxy('/groups').create(group).then((response) => {
    commit(types.SAVE,  GroupsTransformer.fetch(response));
  });
};

export const remove = ({ commit }, group) => {
  new Proxy('/groups').destroy(group).then((response) => {
    commit(types.REMOVE, GroupTransformer.fetch(response));
  });
};

export default {
  all,
  add,
  remove,
};
