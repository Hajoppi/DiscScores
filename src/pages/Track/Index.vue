<template>
  <v-layout>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <router-link class="button" :to="{ name: 'track.new_track' }">Create new</router-link>
        </div>
          <div class="column is-two-fifths" v-for="track in tracks">
            <v-track-card :track=track></v-track-card>
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
