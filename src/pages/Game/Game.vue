<template>
  <v-layout>
    <p> Current hole {{currentHole+1}} </p>
    <button class="button" @click="previousHole">Previous</button>
    <button class="button" @click="nextHole">Next</button>
    <table class="table is-fullwidth">
      <tr v-for="player in playerScores">
        <td>{{player.name}} ({{currentScore(player)}})</td> <td>{{player.scores[currentHole]}} </td> 
        <td><button class="button" @click="decrement(player)">-</button></td>
        <td><button class="button" @click="increment(player)">+</button></td>
      </tr>
    </table>
    <button class="button" @click="save()">Save</button>
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
      currentScore(player) {
        const holes = this.$store.state.track.selectedTrack.holes;
        let res = 0;
        for (let i = 0; i < holes.length; i += 1) {
          res += player.scores[i] - holes[i];
        }
        return res;
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
    },
  };
</script>