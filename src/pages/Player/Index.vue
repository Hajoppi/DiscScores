<template>
  <v-layout>
    <div class="control">
      <input class="input" v-model="newName" type="text" placeholder="Player"><Button @click="addPlayer">Add</Button>
    </div>
    
    <span v-for="player in players">
      <p>{{player.name}}<Button @click="removePlayer(player)">Remove</Button></p>
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
        this.$store.dispatch('player/add', { name: this.newName });
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
