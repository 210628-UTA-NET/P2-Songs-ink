import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PlayerListItemComponent } from './components/player-list-item/player-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatMenuModule} from '@angular/material/menu'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    PlayerListComponent,
    CanvasComponent,
    PlayerListItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatMenuModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
