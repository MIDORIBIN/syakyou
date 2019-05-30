<template>
  <span>
    {{text}}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import {Hiragana} from '../entity/hiragana';
import {sleep} from '../util/promise-util';
import {sleepTime} from '../util/sleep-time';

export default Vue.extend({
  props: {
    hiragana: Object,
    startFlag: Boolean,
  },
  data: () => ({
    text: '',
  }),
  methods: {
    async start(): Promise<void> {
      await this.inputText(this.hiragana);
      this.$emit('end');

    },
    async inputText(hiragana: Hiragana): Promise<void> {
      // ローマ字入力
      const alphabetList = hiragana.hebon.split('').slice(0, -1);
      for (const alphabet of alphabetList) {
        this.text += alphabet;
        await sleep(sleepTime);
      }

      // ひらがな
      this.text = this.text.slice(0, -alphabetList.length);
      this.text += hiragana.hiragana;
      await sleep(sleepTime);
    },
  },
  watch: {
    startFlag(f: boolean) {
      if (f) {
        this.start();
      }
    },
  },
});
</script>

<style scoped>
</style>
