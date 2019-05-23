<template>
  <v-layout>
    <div class="columns">
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ name: 'course.index' }">Course List</router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ name: 'game.start_game' }">Start Game</router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ name: 'player.index' }">Players</router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ name: 'game.past_games' }">Past Games</router-link>
      </div>
      <div class="column">
        <a
          class="button is-fullwidth"
          href="#"
          @click.prevent="logout"
        >
          <i class="fa fa-sign-out"></i>
        </a>
      </div>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */
  import VLayout from '/layouts/Default';
  import VCard from '/components/Card';
  import VCourseCard from '/components/CourseCard';

  export default {
  /**
   * The name of the page.
   */
    name: 'home-index',
    methods:{
      logout() {
        this.$store.dispatch('auth/logout');
      },
    },
      
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      VCourseCard,
    },
};
</script>
