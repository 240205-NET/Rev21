import { Card } from './card.model';
import { Deck } from './deck.model';

export class Hand {
  constructor(public cards: Card[] = [], public score: number = 0) {}
  dealOne(deck: Deck) {
    let oneCard = deck.cards.splice(-1, 1);
    this.cards.push(oneCard[0]);
    console.log(this.cards);
  }

  dealTwo(deck: Deck) {
    let twoCards = deck.cards.splice(-2, 2);
    this.cards.push(...twoCards);
  }

  calculateScore() {
    let newScore = 0;
    let cardsCopy = [...this.cards];
    for (let card of cardsCopy) {
      if (['Jack', 'Queen', 'King'].includes(card.rank)) {
        newScore += 10;
        cardsCopy.filter((x) => x.rank !== card.rank && x.suit !== card.suit);
      } else if (
        ['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(card.rank)
      ) {
        newScore += Number.parseInt(card.rank);
        cardsCopy.filter((x) => x.rank !== card.rank && x.suit !== card.suit);
      }
    }
    for (let remainingCard of cardsCopy) {
      if (remainingCard.rank === 'Ace') {
        newScore += newScore + 10 > 21 ? 1 : 10;
      }
    }
    this.score = newScore;
  }
}
