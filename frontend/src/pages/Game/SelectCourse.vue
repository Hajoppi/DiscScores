<template>
  <v-layout>
    <div class="container">
      <div class="columns">
        <div class="column" v-for="group in groups" :key=group.id>
          <div class="label">{{group.name}}</div>
          <div v-for="player in group.members" :key=player.username>
            <span class="">{{player.username}}</span>
            <input class="is-checkradio is-block is-success" :value=player type="checkbox" :id="player.username" v-model="checkedNames" :name=player.username>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
      <div class="column is-quarter" v-for="course in courses" :key=course.id>
        <div class="label">{{course.name}}</div>
        <td><a class="button" @click.prevent="select(course.id)">Select</a></td>
      </div>
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
  import VCourseCard from '/components/CourseCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'select-course',

    mounted() {
      this.$store.dispatch('group/all');
      this.$store.dispatch('course/all');
    },

    computed: {
      courses() {
        return this.$store.state.course.courses;
      },
      groups() {
        return this.$store.state.group.groups;
      },
      players() {
        return this.$store.state.player.players;
      },
    },

    methods: {
      select(course) {
        this.$store.dispatch('game/start', { players: this.checkedNames, course });
        this.$router.push({
          name: 'game.game',
      });
      },
    },

    data() {
      return {
        checkedNames: [],
      };
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCourseCard,
    },
  };
</script>