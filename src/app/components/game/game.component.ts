import { Component } from '@angular/core';
import { Dealer } from 'src/app/models/dealer.model';
import { Deck } from 'src/app/models/deck.model';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  deck: Deck = new Deck();
  player: Player = new Player();
  dealer: Dealer = new Dealer();
  game: Game = new Game(this.deck, this.dealer, this.player);
}
