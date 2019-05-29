<template>
  <div>
    <!--<OneKanji :kanji="kanji" @end="next"></OneKanji>-->
    <template v-for="(kanji, index) in kanjiList">
      <OneKanji :kanji="kanji" :startFlag="progressList[index]" @end="next"></OneKanji>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Hiragana} from '../entity/hiragana';
import {Kanji} from '../entity/kanji';
import OneKanji from './OneKanji.vue';

export default Vue.extend({
  components: {
    OneKanji,
  },
  data: () => ({
    kanjiList: [
      new Kanji('無', [new Hiragana('mu', 'む')]),
      new Kanji('眼', [new Hiragana('ge', 'げ'), new Hiragana('nn', 'ん')]),
    ],
    progressList: [] as boolean[],
  }),
  methods: {
    initProgressList() {
      this.progressList = new Array<boolean>(this.kanjiList.length).fill(false);
    },
    next() {
      const nowIndex = this.searchNowIndex();
      if (nowIndex >= this.kanjiList.length) {
        // end
        // this.endInputHiragana();
        console.log('owaowa');
        return;
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
    this.next();
  },
});
</script>

<style scoped>
</style>
