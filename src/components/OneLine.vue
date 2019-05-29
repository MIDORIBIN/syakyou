<template>
  <div>
    <OneKanji :kanji="kanji" @end="next"></OneKanji>
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
    kanji: new Kanji('眼', [new Hiragana('ge', 'げ'), new Hiragana('nn', 'ん')]),
  }),
  methods: {
    next(nowIndex: number) {
      console.log(nowIndex);
    },
  },
});
</script>

<style scoped>
</style>
