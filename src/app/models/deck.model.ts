import { Card } from './card.model';

export class Deck {
  constructor(public cards: Card[] = []) {
    this.build();
  }

  build() {
    for (let rank of [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
      'Ace',
    ]) {
      for (let suit of ['Hearts', 'Clubs', 'Spades', 'Diamonds']) {
        let card = new Card(suit, rank);
        this.cards.push(card);
      }
    }
  }

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffle() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
