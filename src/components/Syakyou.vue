<template>
  <div>
    <OneLine :kanjiList="kanjiListList[0]"></OneLine>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OneLine from './OneLine.vue';
import {kyouten} from '../util/kyouten';

export default Vue.extend({
  components: {
    OneLine,
  },
  data: () => ({
    kanjiListList: kyouten,
  }),
});
</script>

<style scoped>
</style>
