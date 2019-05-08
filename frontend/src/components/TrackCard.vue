<template>
  <div class="columnsd">
    <div class="label column is-one-third">{{track.name}}</div>
    <div class="label column is-one-third">{{total}} Holes</div>
    <div class="column is-one-third">
      <a class="button is-warning" @click="removeTrack(track)">Remove</a>
    </div>
  </div>
</template>

<script>
/* ============
 * Track Component
 * ============
 *
 * A basic track component.
 *
 */

import SlotMixin from '../mixins/slot';

export default {
  /**
   * The name of the component.
   */
  name: 'trackCard',

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
    track: null,
  },


  /**
   * The computed properties that the component can use.
   */
  computed: {
    holes() {
      return this.track.holes;
    },

    total() {
      return this.holes.length;
    },
  },

  methods: {
    removeTrack(track) {
      this.$store.dispatch('track/remove', track);
    },
  },
};
</script>