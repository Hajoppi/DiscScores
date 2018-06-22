<template>
  <v-layout>
    <table>
      <tr v-for="(player) in players">
        <div class="field">
          <td><input class="is-checkradio" :value=player type="checkbox" :id="player.name" v-model="checkedNames" :name=player.name></td>
          <td><label for="exampleCheckboxDefault">{{player.name}}</label></td>
        </div>
      </tr>
    </table>
    <table>
    <tr v-for="(track, index) in tracks">
      <td>{{track.name}}</td>
        <td><button class="button" @click="select(index)"> <router-link :to="{ name: 'game.game' }">Select</router-link></button></td>
    </tr>
    </table>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/Default';
  import VTrackCard from '@/components/TrackCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'select-track',

    computed: {
      tracks() {
        return this.$store.state.track.tracks;
      },
      players() {
        return this.$store.state.player.players;
      },
    },

    methods: {
      select(index) {
        this.$store.dispatch('track/select', index);
        this.$store.dispatch('game/start', this.checkedNames);
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
      VTrackCard,
    },
  };
</script>