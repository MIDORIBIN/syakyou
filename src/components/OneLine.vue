<template>
  <div class="display-2 font-weight-bold">
    <template v-for="(kanji, index) in kanjiList">
      <OneKanji :kanji="kanji" :startFlag="progressList[index]" @end="next"></OneKanji>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import OneKanji from './OneKanji.vue';
import {Kanji} from '../entity/kanji';

export default Vue.extend({
  components: {
    OneKanji,
  },
  data: () => ({
    progressList: [] as boolean[],
  }),
  props: {
    kanjiList: Array as PropType<Kanji[]>,
    startFlag: Boolean,
  },
  methods: {
    initProgressList() {
      this.progressList.splice(0);
      this.progressList.push(...new Array<boolean>(this.kanjiList.length).fill(false));
    },
    next() {
      const nowIndex = this.searchNowIndex();
      if (nowIndex >= this.kanjiList.length) {
        this.$emit('end');
      }
      this.progressList.splice(nowIndex, 1, true);
    },
    searchNowIndex(): number {
      return this.progressList
        .filter((flag: boolean) => flag)
        .length;
    },
  },
  watch: {
    startFlag(f: boolean) {
      this.initProgressList();
      if (f) {
        this.next();
      }
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC&display=swap');
span {
  font-family: 'Noto Serif TC', serif;
}
</style>
