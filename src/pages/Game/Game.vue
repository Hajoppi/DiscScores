<template>
  <v-layout>
    <p> Current hole {{currentHole+1}} <p>
    <button @click="previousHole">Previous</button>
    <button @click="nextHole">Next</button>
    <div v-for="player in playerScores">
      {{player.name}} {{player.scores[currentHole]}} 
    <button @click="decrement(player)">-</button>
    <button @click="increment(player)">+</button>
    </div>
    <button @click="save()">Save</button>
  </v-layout>
</template>

<script>
  /* ============
   * Game page
   * ============
   *
   * The game page.
   */

  import VLayout from '@/layouts/Default';

  export default {
    /**
     * The name of the page.
     */
    name: 'game',

    computed: {
      currentHole() {
        return this.$store.state.game.currentHole;
      },
      track() {
        return this.$store.state.track.selectedTrack;
      },
      playerScores() {
        return this.$store.state.game.players;
      },
    },

    methods: {
      increment(player) {
        this.$store.dispatch('game/increment', player);
      },

      decrement(player) {
        this.$store.dispatch('game/decrement', player);
      },

      nextHole() {
        this.$store.dispatch('game/nextHole');
      },

      previousHole() {
        this.$store.dispatch('game/previousHole');
      },
    },

    data() {
      return {

      };
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
    },
  };
</script>