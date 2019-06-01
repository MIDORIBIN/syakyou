<template>
  <div class="scroll-y" style="max-height: 80vh;background: darkviolet">
    <template v-for="(kanjiList, index) in kanjiListList">
      <OneLine :kanjiList="kanjiList" :startFlag="progressList[index]" @end="next"></OneLine>
    </template>
    {{state.count}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OneLine from './OneLine.vue';
import {kyouten} from '../util/kyouten';
import {sleep} from '../util/promise-util';
import {store} from '../store';

export default Vue.extend({
  components: {
    OneLine,
  },
  data: () => ({
    kanjiListList: kyouten.concat(),
    progressList: [] as boolean[],
    state: store.state,
  }),
  methods: {
    initProgressList() {
      this.progressList.splice(0);
      this.progressList.push(...new Array<boolean>(this.kanjiListList.length).fill(false));
    },
    next() {
      const nowIndex = this.searchNowIndex();
      this.progressList.splice(nowIndex, 1, true);
      this.toBottom();
      if (nowIndex >= this.kanjiListList.length) {
        this.reset();
        store.increaseCount();
      }
    },
    searchNowIndex(): number {
      return this.progressList
        .filter((flag: boolean) => flag)
        .length;
    },
    async toBottom() {
      const elem = this.$el;
      // 少し遅延させないとスクロールが一番したまで行かない
      await sleep(0.001);
      elem.scrollTop = 10000;
    },
    async reset() {
      this.kanjiListList.splice(0);
      await sleep(0.01);
      this.kanjiListList.push(...kyouten);
      this.initProgressList();
      await sleep(0.01);
      this.next();
    },
  },
  mounted() {
    this.initProgressList();
    this.next();
  },
});
</script>

<style scoped>
</style>
