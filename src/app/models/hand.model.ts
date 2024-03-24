import { Card } from './card.model';
import { Deck } from './deck.model';

export class Hand {
  constructor(public cards: Card[] = [], public score: number = 0) {}

  dealTwo(deck: Deck) {
    let twoCards = deck.cards.splice(-2, 2);
    this.cards.push(...twoCards);
  }

  calculateScore() {
    let cardsCopy = [...this.cards];
    for (let card of cardsCopy) {
      if (['Jack', 'Queen', 'King'].includes(card.rank)) {
        this.score += 10;
        cardsCopy.filter((x) => x.rank !== card.rank && x.suit !== card.suit);
      } else if (
        ['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(card.rank)
      ) {
        this.score += Number.parseInt(card.rank);
        cardsCopy.filter((x) => x.rank !== card.rank && x.suit !== card.suit);
      }
    }
    for (let remainingCards of cardsCopy) {
      if (remainingCards.rank === 'Ace') {
        this.score += this.score + 10 > 21 ? 1 : 10;
      }
    }
  }
}
