<template>
  <div>
    <template v-if="isHiragana">
      <template v-for="(hiragana, index) in kanji.hiraganaList">
        <OneHiragana :hiragana="hiragana" :promise="promiseList[index]" @end="next"></OneHiragana>
      </template>
    </template>
    <template v-if="!isHiragana">
      <span>{{kanji.kanji}}</span>
    </template>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OneHiragana from './OneHiragana.vue';
import {Hiragana} from '../entity/hiragana';

export default Vue.extend({
  components: {
    OneHiragana,
  },
  props: {
    kanji: Object,
  },
  data: () => ({
    resolveList: [] as Array<() => void>,
    promiseList: [] as Array<Promise<number>>,
    isHiragana: true,
  }),
  methods: {
    inputHiragana() {
      this.kanji.hiraganaList
        .forEach((_: Hiragana, index: number) => {
          this.createPromise(index);
        });
    },
    createPromise(index: number) {
      const promise = new Promise<number>((resolve: (num: number) => void) => {
        this.resolveList.push(() => resolve(index));
      });
      this.promiseList.push(promise);
    },
    next(nowIndex: number) {
      if (nowIndex >= this.kanji.hiraganaList.length - 1) {
        this.hiraganaToKanji();
        return;
      }
      this.resolveList[nowIndex + 1]();
    },
    hiraganaToKanji() {
      this.isHiragana = false;
    },
  },
  mounted() {
    this.inputHiragana();
    this.next(-1);
  },
});
</script>

<style scoped>
</style>
