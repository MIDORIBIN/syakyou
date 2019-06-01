<template>
  <div class="scroll-y" style="max-height: 300px;background: darkviolet">
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
      this.progressList.splice(nowIndex, 1, true);
      this.toBottom();
    },
    searchNowIndex(): number {
      return this.progressList
        .filter((flag: boolean) => flag)
        .length;
    },
    toBottom() {
      const elem = this.$el;
      // 少し遅延させないとスクロールが一番したまで行かない
      setTimeout(() => {
        elem.scrollTop = 10000;
      }, 5);
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
