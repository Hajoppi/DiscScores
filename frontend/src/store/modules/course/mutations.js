/* ============
 * Mutations for the course module
 * ============
 *
 * The mutations that are available on the
 * course module.
 */

import {
  ALL,
  SELECT,
  SAVE,
  REMOVE,
} from './mutation-types';

export default {
  [ALL](state, courses) {
    state.courses = courses;
  },

  [SELECT](state, index) {
    state.selectedCourse = state.courses[index];
  },

  [SAVE](state, course) {
    state.courses.push(course);
  },

  [REMOVE](state, id) {
    for (let i = 0; i < state.courses.length; i += 1) {
      if (state.courses[i].id === id) {
        state.courses.splice(i, 1);
        break;
      }
    }
  },
};
