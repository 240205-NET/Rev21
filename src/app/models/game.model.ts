import { Dealer } from './dealer.model';
import { Deck } from './deck.model';
import { Player } from './player.model';

export class Game {
  constructor(
    public deck: Deck,
    public dealer: Dealer,
    public player: Player
  ) {}
}
