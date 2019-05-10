<template>
  <div class="columns">
    <div class="label column is-one-third">{{course.name}}</div>
    <div class="label column is-one-third">{{total}} Holes</div>
    <div class="column is-one-third">
      <a class="button is-warning" @click="removeCourse(course)">Remove</a>
    </div>
  </div>
</template>

<script>
/* ============
 * Course card Component
 * ============
 */

import SlotMixin from '/mixins/slot';

export default {
  /**
   * The name of the component.
   */
  name: 'courseCard',

  /**
   * The mixins that the component can use.
   */
  mixins: [
    SlotMixin,
  ],

  /**
   * The properties that the component accepts.
   */
  props: {
    contextualStyle: {
      type: String,
      required: false,
    },
    course: null,
  },


  /**
   * The computed properties that the component can use.
   */
  computed: {
    holes() {
      return this.course.holes;
    },

    total() {
      return this.holes.length;
    },
  },

  methods: {
    removeCourse(course) {
      console.log("removing course with id: " + course.id);
      this.$store.dispatch('course/remove', course);
    },
  },
};
</script>