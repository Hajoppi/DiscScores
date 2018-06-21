/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */

import Vue from 'vue';
import store from '@/store';
// import TrackProxy from '@/proxies/TrackProxy';
import PlayerTransformer from '@/transformers/PlayerTransformer';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  /* new PlayerProxy('/players').then((response) => {
    commit(types.ALL, PlayerTransformer.fetchCollection(response));
  }); */
  const players = [
    {
      name: 'petri',
      scores: [],
    },
    {
      name: 'tuomas',
      scores: [],
    },
    {
      name: 'juuso',
      scores: [],
    },
    {
      name: 'eero',
      scores: [],
    },
  ];

  commit(types.ALL, PlayerTransformer.fetchCollection(players));
  commit(types.UPDATE, store.state.track.selectedTrack);
};

export const save = ({ commit }, track) => {
  /* new PlayerProxy('/players').save(track).then((response) => {
    commit(types.SAVE, PlayerTransformer.fetchCollection(response));
  }); */
  commit(types.SAVE, PlayerTransformer.fetch(track));

  Vue.router.push({
    name: 'track.index',
  });
};

export default {
  all,
  save,
};
