<template>
  <v-layout>
    <div class="container">
      <div class="columns">
        <div class="column" v-for="player in players">
          <span class="label">{{player.name}}</span>
          <input class="is-checkradio is-block is-success" :value=player type="checkbox" :id="player.name" v-model="checkedNames" :name=player.name>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
      <div class="column is-quarter" v-for="(track, index) in tracks">
        <div class="label">{{track.name}}</div>
        <td><a class="button" @click="select(index)"><router-link :to="{ name: 'game.game' }">Select</router-link></a></td>
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

  import VLayout from '../../layouts/Default';
  import VTrackCard from '../../components/TrackCard';

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