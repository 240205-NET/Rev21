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
export class GameComponent implements AfterViewInit {
  deck: Deck = new Deck();
  player: Player = new Player();
  dealer: Dealer = new Dealer();
  game: Game = new Game(this.deck, this.dealer, this.player);
  @ViewChild('myDialog') myDialog!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit() {
    this.openDialog();
  }

  openDialog() {
    this.myDialog.nativeElement.showModal();
    requestAnimationFrame(() => {
      this.myDialog.nativeElement.style.opacity = '1'; // Trigger the transition
    });
  }

  closeDialog() {
    const dialog = this.myDialog.nativeElement;
    dialog.style.opacity = '0'; // Fade out before closing
    dialog.addEventListener(
      'transitionend',
      function handler() {
        dialog.close();
        dialog.removeEventListener('transitionend', handler);
        // Reset the style for the next open
        dialog.style.opacity = '';
      },
      { once: true }
    );
  }
  startNewGame() {
    this.game.active = true;
    this.game.deck.shuffle();
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
  handlePlayerStand() {}

  resetGameVariables() {
    //todo
  }
}
