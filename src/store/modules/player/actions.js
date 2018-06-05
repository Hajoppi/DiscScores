/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */

import Vue from 'vue';

// import TrackProxy from '@/proxies/TrackProxy';
import PlayerTransformer from '@/transformers/PlayerTransformer';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  /* new TrackProxy('/tracks').then((response) => {
    commit(types.ALL, TrackTransformer.fetchCollection(response));
  }); */
  const players = [
    {
      name: 'name',
      scores: [],
    },
  ];
  commit(types.ALL, PlayerTransformer.fetchCollection(players));
};

export const select = ({ commit }, index) => {
  commit(types.SELECT, index);
};

export const save = ({ commit }, track) => {
  /* new TrackProxy('/tracks').save(track).then((response) => {
    commit(types.SAVE, TrackTransformer.fetchCollection(response));
  }); */
  commit(types.SAVE, PlayerTransformer.fetch(track));

  Vue.router.push({
    name: 'track.index',
  });
};

export default {
  all,
  select,
  save,
};
