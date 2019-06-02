<template>
  <v-container
          fluid
          grid-list-lg
  >
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">写経回数 : {{state.count}}</div>
              <div class="headline">写経文字数 : {{state.count * 276}}</div>
              <!--<span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>-->
            </div>
          </v-card-title>
          <!--<v-card-actions>-->
            <!--<v-btn flat dark>Listen now</v-btn>-->
          <!--</v-card-actions>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
