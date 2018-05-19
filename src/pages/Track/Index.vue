<template>
  <v-layout>
    <div v-for="track in tracks">
      <v-track-card contextual-style="dark" :track=track>
        <span slot="header">
        </span>
        <div slot="body"></div>
        <div slot="footer"></div>
      </v-track-card>
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

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import VTrackCard from '@/components/TrackCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    computed: {
      tracks() {
        return this.$store.state.track.tracks;
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      VTrackCard,
    },
  };
</script>
