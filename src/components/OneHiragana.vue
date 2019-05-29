<template>
  <span>
    {{text}}
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import {Hiragana} from '../entity/hiragana';

export default Vue.extend({
  props: {
    hiragana: Object,
    promise: Object,
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
    start(hiragana: Hiragana, index: number): Promise<number> {
      return this.inputText(hiragana)
        .then(() => index);
    },
    async inputText(hiragana: Hiragana): Promise<void> {
      // ローマ字入力
      const alphabetList = hiragana.hebon.split('').slice(0, -1);
      for (const alphabet of alphabetList) {
        this.text += alphabet;
        await this.sleep(this.waitTime);
      }

      // ひらがな
      this.text = this.text.slice(0, -alphabetList.length);
      this.text += hiragana.hiragana;
      await this.sleep(this.waitTime);
    },
    sleep(waitSeconds: number) {
      return new Promise((resolve: any) => {
        setTimeout(() => {
          resolve();
        }, waitSeconds * 1000);
      });
    },
  },
  watch: {
    promise(p: Promise<number>) {
      p.then((index: number) => this.start(this.hiragana, index))
        .then((index: number) => this.$emit('end', index));
    },
  },
});
</script>

<style scoped>
</style>
