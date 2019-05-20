<template>
  <v-layout>
    <p v-for="game in pastGames" :key=game.id>
      <v-score-card :game=game>
      </v-score-card>
    </p>
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
  import VScoreCard from '/components/ScoreCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'past-games',

    mounted() {
      this.$store.dispatch('course/all').then(()=>{
        this.$store.dispatch('game/all');
      });
    },

    computed: {
      pastGames() {
        return this.$store.state.game.pastGames;
      },
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VScoreCard,
    },
  };
</script>