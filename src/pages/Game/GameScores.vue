<template>
  <v-layout>
    <h1>{{track.name}}</h1>
    <p>{{new Date()}}</p>
    <table class="table is-fullwidth">
      <tr>
        <th>Hole</th><th v-for="player in playerScores" v-text="player.name"></th>
      </tr>
      <tr v-for="(hole, index) in track.holes">
        <td>{{index}} {{hole}}</td><td v-for="player in playerScores" v-text="player.scores[index]"></td>
      </tr>
      <tr>
        <td>{{totalPar(track.holes)}}</td><td v-for="player in playerScores">{{totalPar(player.scores)}} ({{currentScore(player)}})</td>
      </tr>
    </table>
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
    name: 'game-scores',

    computed: {
      track() {
        return this.$store.state.track.selectedTrack;
      },
      playerScores() {
        return this.$store.state.game.players;
      },
    },

    methods: {
      totalPar(array) {
        return array.reduce((a, b) => a + b, 0);
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