<template>
  <div class="pa-4 teal lighten-2">
    <v-container ref="innerContainer" class="grey lighten-2 scroll-y max-height scrollbar_none">
      <v-layout>
        <v-flex>
          <template v-for="(kanjiList, index) in kanjiListList">
            <OneLine :kanjiList="kanjiList" :startFlag="progressList[index]" @end="next"></OneLine>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
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
    kanjiListList: [...kyouten],
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
      // 少し遅延させないとスクロールが一番したまで行かない
      await sleep(0.001);
      const elem: any = this.$refs.innerContainer;
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
  .max-height {
      height: calc(100vh - 64px - 24px * 2);
  }
  .scrollbar_none{
      overflow-y:auto;
  }
  .scrollbar_none::-webkit-scrollbar{
      display:none;
  }
</style>
