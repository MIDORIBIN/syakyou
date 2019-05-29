<template>
  <div id="app">
      <OneLine></OneLine>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import OneLine from './components/OneLine.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld,
    OneLine,
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
