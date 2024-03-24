import { Hand } from './hand.model';
import { Participant } from './participant.model';

export class Dealer extends Participant {
  constructor(
    public override score: number = 0,
    public override hand: Hand = new Hand(),
    public override wins: number = 0,
    public override losses: number = 0
  ) {
    super(score, hand, wins, losses);
  }
}
