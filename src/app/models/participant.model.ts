import { Hand } from './hand.model';

export class Participant {
  constructor(
    public score: number = 0,
    public hand: Hand = new Hand(),
    public wins: number,
    public losses: number
  ) {}
}
