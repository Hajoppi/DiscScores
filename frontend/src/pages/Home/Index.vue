<template>
  <v-layout>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column">
          <router-link class="button is-fullwidth" :to="{ name: 'track.index' }">Track List</router-link>
        </div>
        <div class="column">
          <router-link class="button is-fullwidth" :to="{ name: 'game.start_game' }">Start Game</router-link>
        </div>
        <div class="column">
          <router-link class="button is-fullwidth" :to="{ name: 'player.index' }">Players</router-link>
        </div>
        <div class="column">
          <router-link class="button is-fullwidth" :to="{ name: 'game.past_games' }">Past Games</router-link>
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
  import VTrackCard from '/components/TrackCard';

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
