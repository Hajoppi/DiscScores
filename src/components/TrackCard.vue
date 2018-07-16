<template>
  <div class="track">
    <h4 :class="classNamesHeader">
      {{track.name}}<Button type="button" @click="removeTrack(track)" class="button">Remove</Button>
    </h4>
    <div class="card-body" >
      <slot name="body"></slot>
      <ul>
        <li v-for="(hole, index) in holes">
          Par {{hole}}
        </li>
      </ul>

    </div>
    <div class="card-footer">Total amount of holes {{total}}</div>
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

  import SlotMixin from '@/mixins/slot';

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

      classNamesHeader() {
        const classNames = ['card-header'];
        if (this.contextualStyle) {
          classNames.push(`bg-${this.contextualStyle}`);
          classNames.push('text-white');
        } else {
          classNames.push('bg-default');
        }

        return classNames;
      },
    },

    methods: {
      removeTrack(track) {
        this.$store.dispatch('track/remove', track);
      },
    },
  };
</script>