<template>
  <v-layout>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <router-link class="button" :to="{ name: 'course.newCourse' }">Create new</router-link>
        </div>
          <div class="column is-two-fifths" v-for="(course, index) in courses" :key=index>
            <v-course-card :course=course></v-course-card>
          </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
/* ============
  * Home Index Page
  * ============
  *
  * The home index page.
  */

import VLayout from '/layouts/Default';
import VCard from '/components/Card';
import VCourseCard from '/components/CourseCard';

export default {
  /**
   * The name of the page.
   */
  name: 'home-index',

  mounted() {
    this.$store.dispatch('course/all');
  },

  computed: {
    courses() {
      return this.$store.state.course.courses;
    },
  },

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
    VCourseCard,
  },
};
</script>
