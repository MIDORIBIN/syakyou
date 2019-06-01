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
      <span :class="{ underbar: isUnderBar }">{{kanji.kanji}}</span>
    </template>
  </span>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import OneHiragana from './OneHiragana.vue';
import {sleep} from '../util/promise-util';
import {sleepTime} from '../util/sleep-time';
import {Kanji} from '../entity/kanji';

export default Vue.extend({
  components: {
    OneHiragana,
  },
  props: {
    kanji: Object as PropType<Kanji>,
    startFlag: Boolean,
  },
  data: () => ({
    resolveList: [] as Array<() => void>,
    progressList: [] as boolean[],
    isHiragana: true,
    isUnderBar: true,
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
      this.isUnderBar = false;
      this.$emit('end');
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
  .underbar {
    text-decoration: underline;
  }
</style>
