<template>
  <v-flex xs12>
    <v-card color="blue darken-2" class="white--text">
      <v-card-text class="headline" primary-title>
        <div>写経回数 : {{state.count}}</div>
        <div>写経文字数 : {{state.count * 276}}</div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store';

export default Vue.extend({
  data: () => ({
    state: store.state,
  }),
});
</script>

<style scoped>
</style>
