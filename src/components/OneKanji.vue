<template>
  <span>
    <!--ひらがな-->
    <template v-if="isHiragana">
      <template v-for="(hiragana, index) in kanji.hiraganaList">
        <OneHiragana :hiragana="hiragana" :startFlag="progressList[index]" @end="next"></OneHiragana>
      </template>
    </template>
    <!--漢字-->
    <template v-if="!isHiragana">
      <span>{{kanji.kanji}}</span>
    </template>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import OneHiragana from './OneHiragana.vue';
import {sleep} from '../util/promise-util';
import {sleepTime} from '../util/sleep-time';

export default Vue.extend({
  components: {
    OneHiragana,
  },
  props: {
    kanji: Object,
    startFlag: Boolean,
  },
  data: () => ({
    resolveList: [] as Array<() => void>,
    progressList: [] as boolean[],
    isHiragana: true,
  }),
  methods: {
    initProgressList() {
      // Array.prototype.push.apply(this.progressList, new Array<boolean>(this.kanji.hiraganaList.length).fill(false));
      this.progressList = new Array<boolean>(this.kanji.hiraganaList.length).fill(false);
    },
    next() {
      const nowIndex = this.searchNowIndex();
      if (nowIndex >= this.kanji.hiraganaList.length) {
        this.endInputHiragana();
        return;
      }
      this.progressList.splice(nowIndex, 1, true);
    },
    searchNowIndex(): number {
      return this.progressList
        .filter((flag: boolean) => flag)
        .length;
    },
    hiraganaToKanji() {
      this.isHiragana = false;
    },
    async endInputHiragana() {
      this.hiraganaToKanji();
      await sleep(sleepTime);
      this.$emit('end');
    },
  },
  mounted() {
    this.initProgressList();
    // this.next();
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
