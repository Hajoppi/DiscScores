<template>
  <v-layout>
    <div class="container">
      <h1 class="label">Current hole {{currentHole+1}}</h1>
      <div class="level is-mobile">
        <h2 class="tag is-info level-item level-left">Par {{course.holes[currentHole]}}</h2>
        <a class="button level-item" @click="previousHole"><i class="fa fa-arrow-left fa-2x"></i></a>
        <a class="button level-item" @click="nextHole"><i class="fa fa-arrow-right fa-2x"></i></a>
      </div>    
      <div v-for="player in playerScores" :key=player.id>
        <div class="columns is-mobile is-fullwidth">
          <div class="column label">{{player.username}}</div>
          <div class="column">({{currentScore(player)}})</div>
          <div class="column" v-text="player.scores[currentHole]"></div>
          <div class="column"><a class="button" @click="decrement(player)"><i class="fa fa-minus"></i></a></div>
          <div class="column"><a class="button" @click="increment(player)"><i class="fa fa-plus"></i></a></div>
        </div>
      </div>
      <router-link class="button" :to="{ name: 'game.scores' }">Done</router-link>
    </div>
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
    name: 'game',
    beforeCreate() {
      this.$store.dispatch('course/all');
    },
    computed: {
      currentHole() {
        return this.$store.state.game.currentHole;
      },
      course() {
        const courseId = this.$store.state.game.selectedCourse;
        const course = this.$store.getters["course/get"](courseId);
        if (course === 0) return {holes:[], name: ""};
        return course;
      },
      playerScores() {
        return this.$store.state.game.players;
      },

    },

    methods: {
      increment(player) {
        this.$store.dispatch('game/increment', player)
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
      hole(player) {
        return player.scores[this.currentHole];
      },
      currentScore(player) {
        const holes = this.course.holes;
        let res = 0;
        for (let i = 0; i < holes.length; i += 1) {
          res += player.scores[i] - holes[i];
        }
        return res;
      },
      holeScore(player) {Track
        return player.scores[this.currentHole] - this.course.holes[this.currentHole];
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