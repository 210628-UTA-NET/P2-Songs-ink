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
import { SocketIoService } from './services/socketio.service';
import { ChatComponent } from './components/chat/chat.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    PlayerListComponent,
    CanvasComponent,
    PlayerListItemComponent,
    ChatComponent,
    RoomListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
