<template>
  <v-layout>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Track name</label>
            <div class="control">
              <input class="input" v-model="name" type="text" placeholder="Track name">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="level is-mobile">
            <div class="label level-item">Amount of holes {{total}}</div>
            <button class="button level-item" type="button" @click="pushField"><i class="fa fa-plus"></i></button>
            <button class="button level-item" type="button" @click="delField"><i class="fa fa-minus"></i></button>
          </div>
        </div>

      </div>
      <div class="columns is-multiline">
      <div v-for="(hole, index) in holes" class="column is-one-fifth">
        <div class="level is-mobile">
          <label class="label level-item">Hole {{index + 1}}</label>
          <div class="tag is-info level-item">Par {{hole}}</div>
          <button class="button level-item" type="button" @click="decrement(index)"><i class="fa fa-minus"></i></button>
          <button class="button level-item" type="button" @click="increment(index)"><i class="fa fa-plus"></i></button>
        </div>
      </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          <a class="button is-primary is-fullwidth" @click="save">Save</a>
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
  import VCard from '/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    mounted() {
      this.holes = new Array(18).fill(3, 0);
    },

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
      save() {
        this.$store.dispatch('track/save', { name: this.name, holes: this.holes });
      },
    },

    data() {
      return {
        name: '',
        holes: [],
      };
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
