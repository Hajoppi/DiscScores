/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */

import Vue from 'vue';

import TrackTransformer from '../../../transformers/TrackTransformer';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  /* new TrackProxy('/tracks').then((response) => {
    commit(types.ALL, TrackTransformer.fetchCollection(response));
  }); */
  const tracks = [
    {
      name: '1st track',
      holes: [3, 3, 4, 3, 3, 3, 2, 4, 3, 3, 3, 5, 3, 3, 5, 3, 4, 3],
    },
  ];
  commit(types.ALL, TrackTransformer.fetchCollection(tracks));
};

export const select = ({ commit }, index) => {
  commit(types.SELECT, index);
};

export const save = ({ commit }, track) => {
  /* new TrackProxy('/tracks').save(track).then((response) => {
    commit(types.SAVE, TrackTransformer.fetchCollection(response));
  }); */
  commit(types.SAVE, TrackTransformer.fetch(track));

  Vue.router.push({
    name: 'track.index',
  });
};

export const remove = ({ commit }, track) => {
  commit(types.REMOVE, TrackTransformer.fetch(track));
};

export default {
  all,
  select,
  save,
  remove,
};
