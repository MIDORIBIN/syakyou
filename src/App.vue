<template>
  <v-app>
    <SideBar></SideBar>
    <v-toolbar
            fixed
            clipped-left
            app
            color="indigo"
    >
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Automatic Photography</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Syakyou></Syakyou>
    </v-content>
  </v-app>
</template>

<script>
import Syakyou from './components/Syakyou';
import SideBar from './components/SideBar';
import {store} from './store';

export default {
  name: 'App',
  components: {
    Syakyou,
    SideBar,
  },
  mounted() {
    store.initCount();
  },
};
</script>

<style>
</style>
