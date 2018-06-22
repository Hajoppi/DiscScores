<template>
  <v-layout>
    <span v-for="(player) in players">
      <div class="field">
        <input class="is-checkradio" :value=player type="checkbox" :id="player.name" v-model="checkedNames" :name=player.name>
        <label for="exampleCheckboxDefault">{{player.name}}</label>
      </div>
    </span>
    <span v-for="(track, index) in tracks">
      <p>{{track.name}}<button @click="select(index)"><router-link :to="{ name: 'game.game' }">Select</router-link></button></p>
    </span>


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