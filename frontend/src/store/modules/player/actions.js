/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */

// import Vue from 'vue';
import PlayerProxy from '../../../proxies/PlayerProxy';
import PlayerTransformer from '../../../transformers/PlayerTransformer';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  new PlayerProxy('/players').then((response) => {
    commit(types.ALL, PlayerTransformer.fetchCollection(response));
  });
};

export const add = ({ commit }, player) => {
  /* new PlayerProxy('/players').save(track).then((response) => {
    commit(types.SAVE, PlayerTransformer.fetchCollection(response));
  }); */
  commit(types.ADD, PlayerTransformer.fetch(player));
};

export const remove = ({ commit }, player) => {
  commit(types.REMOVE, PlayerTransformer.fetch(player));
};

export default {
  all,
  add,
  remove,
};
