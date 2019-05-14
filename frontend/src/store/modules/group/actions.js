/* ============
 * Actions for the group module
 * ============
 *
 * The actions that are available on the
 * group module.
 */

// import Vue from 'vue';
import Proxy from '/proxies/Proxy';
import GroupTransformer from '/transformers/GroupTransformer';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  new Proxy('groups').all().then((response) => {
    commit(types.ALL, GroupTransformer.fetchCollection(response));
  });
};

export const add = ({ commit }, group) => {
  console.log("creating: " + group);
  new Proxy('groups').create(GroupTransformer.send(group)).then((response) => {
    commit(types.ADD,  GroupTransformer.fetch(response));
  });
};

export const remove = ({ commit }, group) => {
  new Proxy('groups').destroy(group).then((response) => {
    commit(types.REMOVE, GroupTransformer.fetch(response));
  });
};

export const join = ({ commit }, group) => {
  console.log(group);
  new Proxy('group/user').create(group).then((response) => {
    console.log(response);
    commit(types.JOIN, response);
  });
}

export const leave = ({ commit }, group) => {
  new Proxy('group/user').destroy(group.id).then((response) => {
    commit(types.JOIN, GroupTransformer.fetch(response));
  });
}

export default {
  all,
  add,
  remove,
  join,
  leave,
};
