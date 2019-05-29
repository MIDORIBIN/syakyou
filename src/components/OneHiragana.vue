<template>
  <span>
    {{text}}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import {Hiragana} from '../entity/hiragana';
import {sleep} from '../util/promise-util';

export default Vue.extend({
  props: {
    hiragana: Object,
    startFlag: Boolean,
  },
  data: () => ({
    text: '',
  }),
  computed: {
    waitTime() {
      return 1;
    },
  },
  methods: {
    start(hiragana: Hiragana): Promise<void> {
      return this.inputText(hiragana);
    },
    async inputText(hiragana: Hiragana): Promise<void> {
      // ローマ字入力
      const alphabetList = hiragana.hebon.split('').slice(0, -1);
      for (const alphabet of alphabetList) {
        this.text += alphabet;
        await sleep(this.waitTime);
      }

      // ひらがな
      this.text = this.text.slice(0, -alphabetList.length);
      this.text += hiragana.hiragana;
      await sleep(this.waitTime);
    },
  },
  watch: {
    startFlag(f: boolean) {
      if (f) {
        this.start(this.hiragana)
          .then(() => this.$emit('end'));
      }
    },
  },
});
</script>

<style scoped>
</style>
