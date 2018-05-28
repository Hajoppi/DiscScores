<template>
  <v-layout>
  <form>
      <div class="field">
        {{total}}
        <button @click="pushField">+</button> <button @click="delField">-</button>
        <div class="control">
          <input class="input" v-model="name" type="text" placeholder="Track name">
        </div>
      </div>
      <div v-for="(hole, index) in holes" class="field">
        <label class="label">Hole {{index + 1}}</label>
        <div class="control">
          {{hole}}
          <button @click="increment(index)">+</button> <button @click="decrement(index)">-</button>
        </div>
      </div>
    </form>
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
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    computed: {
      total() {
        return this.holes.length;
      },
    },

    methods: {
      increment(index) {
        this.$set(this.holes, index, this.holes[index] + 1);
      },

      decrement(index) {
        this.$set(this.holes, index, this.holes[index] - 1);
      },

      pushField() {
        this.holes.push(3);
      },
      delField() {
        this.holes.pop();
      },
    },

    data() {
      return {
        name: '',
        holes: [],
      };
    },

    created() {
      this.holes = new Array(18).fill(3, 0);
    },
    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
