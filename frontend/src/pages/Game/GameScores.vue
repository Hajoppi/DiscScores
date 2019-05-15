<template>
  <v-layout>
    <h1><b>{{course.name}}</b></h1>
    <p>{{currentDate}}</p>
    <table class="table is-narrow is-bordered" style="font-size:0.75em">
      <tr>
        <th>Hole</th><th v-for="player in playerScores" v-text="player.username" :key=player.id></th>
      </tr>
      <tr v-for="(hole, index) in course.holes" :key=index>
        <td>{{index + 1}} ({{hole}})</td>
        <td v-for="player in playerScores" 
            :style="getBackground(player.scores[index], hole)" 
            v-text="player.scores[index]" 
            :key=player.id>
        </td>
      </tr>
      <tr>
        <td>{{totalPar(course.holes)}}</td><td v-for="(player) in playerScores" :key=player.id>{{totalPar(player.scores)}} ({{currentScore(player)}})</td>
      </tr>
    </table>
    <router-link class="button" @click="saveGame" :to="{ name: 'home.index' }">Save</router-link>
  </v-layout>
</template>

<script>
  /* ============
   * Game page
   * ============
   *
   * The game page.
   */
  import VLayout from '/layouts/Default';

  export default {
    /**
     * The name of the page.
     */
    name: 'game-scores',

    computed: {
      course() {
        return this.$store.state.course.selectedCourse;
      },
      playerScores() {
        return this.$store.state.game.players;
      },
      currentDate() {
        return (new Date()).toString().split(' ', 5).join(' ');
      },
    },

    methods: {
      saveGame() {
        this.$store.dispatch('game/save');
      },
      totalPar(array) {
        return array.reduce((a, b) => a + b, 0);
      },
      currentScore(player) {
        const holes = this.$store.state.course.selectedCourse.holes;
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