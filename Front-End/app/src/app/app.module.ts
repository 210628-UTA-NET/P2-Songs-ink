import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatTableModule} from '@angular/material/table'; 
// import { SocketioService } from './services/socketio.service';
import { ChatComponent } from './components/chat/chat.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
    LobbyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"lobby", component: LobbyComponent},
      {path:"room-list", component: RoomListComponent},
      {path:"login", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]),
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    SocketIoModule.forRoot(config),
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
