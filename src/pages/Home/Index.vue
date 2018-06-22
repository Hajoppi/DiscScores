<template>
  <v-layout>
    <button><router-link :to="{ name: 'track.index' }">Track List</router-link></button>
    <button><router-link :to="{ name: 'game.start_game' }">Start Game</router-link></button>
    <button><router-link :to="{ name: 'player.index' }">Players</router-link></button>
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
