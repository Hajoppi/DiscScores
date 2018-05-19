/* ============
 * Actions for the track module
 * ============
 *
 * The actions that are available on the
 * track module.
 */


// import TrackProxy from '@/proxies/TrackProxy';
import TrackTransformer from '@/transformers/TrackTransformer';
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
    {
      name: '2nd track',
      holes: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    },
    {
      name: '3rd track',
      holes: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    },
  ];
  commit(types.ALL, TrackTransformer.fetchCollection(tracks));
};

export const select = ({ commit }, index) => {
  commit(types.SELECT, index);
};

export default {
  all,
  select,
};
