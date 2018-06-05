<template>
  <v-layout>
    <p> Current hole {{currentHole+1}} <p>
    <button @click="previousHole">Previous</button>
    <button @click="nextHole">Next</button>
    <div v-for="(player, index) in playerScores">
      {{player.name}} {{player.scores[currentHole]}} 
    <button @click="decrement(player.scores)">-</button>
    <button @click="increment(player.scores)">+</button>
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
    },

    methods: {
      increment(scores) {
        this.$set(scores, this.currentHole, scores[this.currentHole] + 1);
      },

      decrement(scores) {
        this.$set(scores, this.currentHole, scores[this.currentHole] - 1);
      },

      nextHole() {
        if (this.currentHole < this.track.holes.length - 1) this.currentHole += 1;
      },

      previousHole() {
        if (this.currentHole > 0) this.currentHole -= 1;
      },
    },

    data() {
      return {
        track: this.$store.state.track.selectedTrack,
        currentHole: 0,
        playerScores: [
          { name: 'petri',
            scores: this.$store.state.track.selectedTrack.holes.slice(0),
          },
          { name: 'tuomas',
            scores: this.$store.state.track.selectedTrack.holes.slice(0),
          },
          { name: 'juuso',
            scores: this.$store.state.track.selectedTrack.holes.slice(0),
          },
          { name: 'tutka',
            scores: this.$store.state.track.selectedTrack.holes.slice(0),
          },
        ],
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