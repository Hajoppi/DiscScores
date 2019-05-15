/* ============
 * Actions for the course module
 * ============
 *
 * The actions that are available on the
 * course module.
 */

import Vue from 'vue';

import CourseTransformer from '/transformers/CourseTransformer';
import CourseProxy from '/proxies/CourseProxy';
import * as types from './mutation-types';


export const all = ({ commit }) => {
  new CourseProxy().all().then((response) => {
    commit(types.ALL, CourseTransformer.fetchCollection(response));
  });
};

export const save = ({ commit }, course) => {
  new CourseProxy().create(CourseTransformer.send(course)).then((response) => {
    commit(types.SAVE, CourseTransformer.fetch(response));
    Vue.router.push({
      name: 'course.index',
    });
  });
};

export const remove = ({ commit }, course) => {
  new CourseProxy().destroy(course.id).then((response) => {
    commit(types.REMOVE, response);
  }).catch((error) => {
    console.error("Error in deletion", error);
  });
};

export default {
  all,
  save,
  remove,
};
