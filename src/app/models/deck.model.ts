import { Card } from './card.model';

export class Deck {
  constructor(public cards: Card[] = []) {}

  build() {
    for (let suit of ['Hearts', 'Clubs', 'Spades', 'Diamonds']) {
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
        let card = new Card(suit, rank);
        this.cards.push(card);
      }
    }
  }

  shuffle() {
    // TODO
  }
}
