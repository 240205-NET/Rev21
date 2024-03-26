import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('200ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalComponent {
  showModal: boolean = false;
  @Input() gameOver = false;
  @Input() gameActive = false;
  @Input() gameOverMessage = '';
  @Output() gameActiveEvent = new EventEmitter<{
    gameActive: boolean;
    gameOver: boolean;
  }>();

  setGameStarted(gameActive: boolean, gameOver: boolean) {
    this.gameActiveEvent.emit({ gameActive, gameOver });
  }
  constructor() {}

  openModal() {
    this.showModal = true;
    // Implement additional logic here if necessary, such as adding a class to the body to prevent scrolling
  }

  closeModal() {
    this.showModal = false;
    // Implement additional logic here if necessary
  }
}
