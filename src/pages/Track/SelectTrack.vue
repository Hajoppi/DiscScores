<template>
  <v-layout>
    <span v-for="(track, index) in tracks">
      {{track.name}}<button @click="select(index)"><router-link :to="{ name: 'track.game' }">Select</router-link></button>
    </span>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VTrackCard from '@/components/TrackCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'select-track',

    computed: {
      tracks() {
        return this.$store.state.track.tracks;
      },
    },

    methods: {
      select(index) {
        this.$store.dispatch('track/select', index);
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VTrackCard,
    },
  };
</script>