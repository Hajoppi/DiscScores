<template>
  <v-layout>
    <div class="field">
    <div class="control">
      <div class="label">Add Player</div>
      <div class="columns is-mobile">
        <div class="column is-half">
          <input class="input" v-model="newName" type="text">
        </div>
        <div class="column is-half">
          <a class="button is-success" @click="addPlayer"><i class="fa fa-plus"></i></a>
        </div>
      </div>
    </div>
    </div>
    <div class="columns">
      <div class="column" v-for="player in players">
        <div class="label column is-half">{{player.name}}</div>
        <div class="column is-half">
          <a class="button is-warning" @click="removePlayer(player)">Remove</a>
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

export default {
  /**
   * The name of the page.
   */
  name: 'game-index',

  computed: {
    players() {
      return this.$store.state.player.players;
    },
  },

  methods: {
    addPlayer() {
      if (this.newName.length > 0) {
        this.$store.dispatch('player/add', { name: this.newName });
      }
      this.newName = '';
    },
    removePlayer(player) {
      this.$store.dispatch('player/remove', player);
    },
  },

  data() {
    return {
      newName: '',
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
