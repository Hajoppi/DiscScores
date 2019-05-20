<template>
  <div>
    <h1><b>{{course.name}}</b></h1>
    <p>{{currentDate}}<Button type="button" @click="removeGame()" class="button">Remove</Button></p>

    <table class="table is-narrow is-bordered" style="font-size:0.75em">
      <tr>
        <th>Hole</th><th v-for="player in playerScores" v-text="player.username" :key=player.username></th>
      </tr>
      <tr v-for="(hole, index) in course.holes" :key=index>
        <td>{{index + 1}} ({{hole}})</td>
        <td v-for="player in playerScores" :style="getBackground(player.scores[index], hole)" v-text="player.scores[index]" :key=player.username></td>
      </tr>
      <tr>
        <td>{{totalPar(course.holes)}}</td><td v-for="player in playerScores" :key=player.username>{{totalPar(player.scores)}} ({{currentScore(player)}})</td>
      </tr>
    </table>
</div>
</template>

<script>
  /* ============
   * ScoreCard Component
   * ============
   *
   * A basic score card component.
   *
   */

  import SlotMixin from '/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'scoreCard',

    /**
     * The mixins that the component can use.
     */
    mixins: [
      SlotMixin,
    ],

    /**
     * The properties that the component accepts.
     */
    props: {
      game: null,
    },


    /**
     * The computed properties that the component can use.
     */
    computed: {
      course() {
        const courseId = this.game.selectedCourse;
        console.log(this.$store.getters["course/get"](courseId));
        return this.$store.getters["course/get"](courseId);
      },
      total() {
        return this.holes.length;
      },
      playerScores() {
        return this.game.playerScores;
      },
      currentDate() {
        return (new Date()).toString().split(' ', 5).join(' ');
      },

      classNamesHeader() {
        const classNames = ['card-header'];
        if (this.contextualStyle) {
          classNames.push(`bg-${this.contextualStyle}`);
          classNames.push('text-white');
        } else {
          classNames.push('bg-default');
        }

        return classNames;
      },
    },

    methods: {
      totalPar(array) {
        if(array === undefined) return 0;
        return array.reduce((a, b) => a + b, 0);
      },
      currentScore(player) {
        const holes = this.course.holes;
        if(holes === undefined) return 0;
        let res = 0;
        for (let i = 0; i < holes.length; i += 1) {
          res += player.scores[i] - holes[i];
        }
        return res;
      },
      removeGame() {
        this.$store.dispatch('game/remove', this.game);
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
  };
</script>