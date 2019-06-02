<template>
  <v-container
          fluid
          grid-list-lg
  >
    <v-layout row wrap>
      <SyakyouCount></SyakyouCount>
      <SleepTimeSlider></SleepTimeSlider>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SyakyouCount from './SyakyouCount.vue';
import SleepTimeSlider from './SleepTimeSlider.vue';

export default Vue.extend({
  components: {
    SyakyouCount,
    SleepTimeSlider,
  },
});
</script>

<style scoped>
</style>
