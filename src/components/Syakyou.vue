<template>
  <div>
    <template v-for="(kanjiList, index) in kanjiListList">
      <OneLine :kanjiList="kanjiList" :startFlag="progressList[index]" @end="next"></OneLine>
    </template>
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
    progressList: [] as boolean[],
  }),
  methods: {
    initProgressList() {
      this.progressList = new Array<boolean>(this.kanjiListList.length).fill(false);
    },
    next() {
      const nowIndex = this.searchNowIndex();
      // if (nowIndex >= this.kanjiListList.length) {
      //   console.log('owaowa');
      //   return;
      // }
      this.progressList.splice(nowIndex, 1, true);
    },
    searchNowIndex(): number {
      return this.progressList
        .filter((flag: boolean) => flag)
        .length;
    },
  },
  mounted() {
    this.initProgressList();
    this.next();
  },
});
</script>

<style scoped>
  div {
    overflow: auto;
    height: 20vh;
    background: #ff5c83
  }
</style>
