<template>
  <div>
    <template v-for="(kanji, index) in kanjiList">
      <OneKanji :kanji="kanji" :startFlag="progressList[index]" @end="next"></OneKanji>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OneKanji from './OneKanji.vue';

export default Vue.extend({
  components: {
    OneKanji,
  },
  data: () => ({
    progressList: [] as boolean[],
  }),
  props: {
    kanjiList: Object,
    startFlag: Boolean,
  },
  methods: {
    initProgressList() {
      this.progressList = new Array<boolean>(this.kanjiList.length).fill(false);
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
  mounted() {
    this.initProgressList();
  },

  watch: {
    startFlag(f: boolean) {
      if (f) {
        this.next();
      }
    },
  },
});
</script>

<style scoped>
</style>
