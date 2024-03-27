import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  startNewGame() {
    this.game.active = true;
    this.game.over = false;
    this.game.reset();
    this.player.hand.dealTwo(this.game.deck);
    this.dealer.hand.dealTwo(this.game.deck);
    this.player.hand.calculateScore();
    this.dealer.hand.calculateScore();
  }

  handlePlayerHit() {
    if (this.game.active) {
      this.player.hand.dealOne(this.game.deck);
      const playerStatus = this.determinePlayerStatus();
      if (playerStatus === 'Playing') return;
      if (playerStatus === 'Won' || playerStatus === 'Lost') {
        this.game.active = false;
        this.game.over = true;
        this.game.gameOverMessage = playerStatus;
      }
    }
  }
  determinePlayerStatus() {
    this.player.hand.calculateScore();
    if (this.player.hand.score >= 21) {
      return this.player.hand.score === 21 ? 'Won' : 'Lost';
    }
    return 'Playing';
  }

  handlePlayerStand() {
    while (this.dealer.hand.score < 17) {
      this.dealer.hand.dealOne(this.game.deck);
      this.dealer.hand.calculateDealerScore();
    }
    if (this.dealer.hand.score > this.player.hand.score) {
      this.game.gameOverMessage = this.dealer.hand.score > 21 ? 'Won' : 'Lost';
    } else {
      this.game.gameOverMessage = 'Won';
    }
    this.game.active = false;
    this.game.over = true;
  }

  resetGameVariables() {
    //todo
  }
}
