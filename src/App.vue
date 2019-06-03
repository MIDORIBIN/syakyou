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
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Syakyou></Syakyou>
    </v-content>
  </v-app>
</template>

<script>
import Syakyou from './components/Syakyou';
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    Syakyou,
    SideBar,
  },
};
</script>

<style>
</style>
