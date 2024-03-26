import { Dealer } from './dealer.model';
import { Deck } from './deck.model';
import { Player } from './player.model';

export class Game {
  constructor(
    public deck: Deck,
    public dealer: Dealer,
    public player: Player,
    public active: boolean = false,
    public over: boolean = false,
    public gameOverMessage: string = ''
  ) {}
  reset() {
    this.deck.shuffle();
    for (let hand of [this.dealer.hand, this.player.hand]) {
      hand.clear();
    }
  }
}
