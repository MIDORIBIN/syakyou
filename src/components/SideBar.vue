<template>
  <v-navigation-drawer
          fixed
          clipped
          app
          class="cyan darken-2"
  >
    <SyakyouCount></SyakyouCount>
    <SleepTimeSlider></SleepTimeSlider>
  </v-navigation-drawer>
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
