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
      new Kanji('摩', [new Hiragana('ma', 'ま')]),
      new Kanji('訶', [new Hiragana('ka', 'か')]),
      new Kanji('般', [new Hiragana('ha', 'は'), new Hiragana('nn', 'ん')]),
      new Kanji('若', [new Hiragana('nya', 'にゃ')]),
      new Kanji('波', [new Hiragana('ha', 'は')]),
      new Kanji('羅', [new Hiragana('ra', 'ら')]),
      new Kanji('蜜', [new Hiragana('mi', 'み')]),
      new Kanji('多', [new Hiragana('ta', 'た')]),
      new Kanji('心', [new Hiragana('si', 'し'), new Hiragana('nn', 'ん')]),
      new Kanji('経', [new Hiragana('gyo', 'ぎょ'), new Hiragana('u', 'う')]),
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
