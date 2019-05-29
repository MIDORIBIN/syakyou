import {Hiragana} from '@/entity/hiragana';

export class Kanji {
  constructor(
    public kanji: string,
    public hiraganaList: Hiragana[],
  ) {
    //
  }
}
