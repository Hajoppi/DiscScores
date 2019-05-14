<template>
  <v-layout>
    <div class="field">
    <div class="control">
      <div class="label">Add Group</div>
      <div class="columns is-mobile">
        <div class="column is-half">
          <input class="input" v-model="newName" type="text">
        </div>
        <div class="column is-half">
          <a class="button is-success" @click="addGroup"><i class="fa fa-plus"></i></a>
        </div>
      </div>
    </div>
    </div>
    <div class="columns">
      <div class="column" v-for="group in groups" :key=group.id>
        <div class="label column is-half">{{group.name}}</div>
        <div v-for="member in group.members" :key="member.id">{{member.username}}</div>
        <div class="column is-half">
          <a class="button is-warning" @click="removeGroup(group)">Remove</a>
          <a class="button is-info" @click="joinGroup(group)">Join</a>
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
    groups() {
      return this.$store.state.group.groups;
    },
  },
  mounted() {
    this.$store.dispatch('group/all');
  },
  methods: {
    addGroup() {
      if (this.newName.length > 0) {
        this.$store.dispatch('group/add', { name: this.newName });
      }
      this.newName = '';
    },
    removeGroup(group) {
      this.$store.dispatch('group/remove', group.id);
    },
    joinGroup(group) {
      this.$store.dispatch('group/join', {id: group.id });
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
