<template>
  <v-layout>
    <v-track-card contextual-style="dark">
      <span slot="header">
      </span>
      <div slot="body"></div>
      <div slot="footer"></div>
    </v-track-card>
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
  import VTrackCard from '@/components/TrackCard';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
      VTrackCard,
    },
  };
</script>
