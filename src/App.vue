<template>
  <v-app>
    <v-navigation-drawer
            fixed
            clipped
            app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-content>
            <v-list-tile-title>
              <div>aaa</div>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            fixed
            clipped-left
            app
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

export default {
  name: 'App',
  components: {
    Syakyou,
  },
};
</script>

<style>
</style>
