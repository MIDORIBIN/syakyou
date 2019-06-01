<template>
  <span>
    {{text}}
  </span>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {Hiragana} from '../entity/hiragana';
import {sleep} from '../util/promise-util';
import {store} from '../store';

export default Vue.extend({
  props: {
    hiragana: Object as PropType<Hiragana>,
    startFlag: Boolean,
  },
  data: () => ({
    text: '',
    state: store.state,
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
        await sleep(this.state.sleepTime);
      }

      // ひらがな
      this.text = this.text.slice(0, -alphabetList.length);
      this.text += hiragana.hiragana;
      await sleep(this.state.sleepTime);
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
