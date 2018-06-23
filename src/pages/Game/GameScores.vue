<template>
  <v-layout>
    <h1><b>{{track.name}}</b></h1>
    <p>{{currentDate}}</p>
    <table class="table is-fullwidth is-bordered is-narrow">
      <tr>
        <th>Hole</th><th v-for="player in playerScores" v-text="player.name"></th>
      </tr>
      <tr v-for="(hole, index) in track.holes">
        <td>{{index + 1}} ({{hole}})</td>
        <td v-for="player in playerScores" :style="getBackground(player.scores[index], hole)" v-text="player.scores[index]"></td>
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
      currentDate() {
        return (new Date()).toString().split(' ', 5).join(' ');
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
      getBackground(playerScore, holePar) {
        const score = playerScore - holePar;
        let res = 'background-color:';
        if (score === 0) {
          res += '#33cc33';
        } else if (score === -1) {
          res += '#0066ff';
        } else if (score <= -2) {
          res += '#99ccff';
        } else if (score === 1) {
          res += 'yellow';
        } else if (score === 2) {
          res += '#ff6600';
        } else if (score > 2) {
          res += 'red';
        } else {
          res += 'white';
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