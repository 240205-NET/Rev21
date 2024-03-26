import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ScoreComponent } from './game/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardsComponent,
    CardComponent,
    ModalComponent,
    ScoreComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
