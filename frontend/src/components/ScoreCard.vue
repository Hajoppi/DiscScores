<template>
  <div>
    <h1><b>{{track.name}}</b></h1>
    <p>{{currentDate}}<Button type="button" @click="removeGame()" class="button">Remove</Button></p>

    <table class="table is-narrow is-bordered" style="font-size:0.75em">
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

  import SlotMixin from '../mixins/slot';

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
      track() {
        const tracks = this.$store.state.track.tracks;
        for (let i = 0; i < tracks.length; i += 1) {
          if (tracks[i].name === this.game.trackName) {
            return tracks[i];
          }
        }
        return {};
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