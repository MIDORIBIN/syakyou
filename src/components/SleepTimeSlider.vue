<template>
  <v-flex xs12>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div class="headline">タイピング速度</div>
        <v-slider
                v-model="slider"
                :min="1"
                :max="10"
        ></v-slider>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import {store} from '../store';

export default Vue.extend({
  data: () => ({
    state: store.state,
    slider: 0,
  }),
  watch: {
    slider(num: number) {
      store.setSleepTime(1 / num);
    },
  },
});
</script>

<style scoped>
</style>
