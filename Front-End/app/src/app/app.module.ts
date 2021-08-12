import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { SocketIoService } from './services/socketio.service';
import {MatTableModule} from '@angular/material/table'; 
// import { SocketioService } from './services/socketio.service';
import { ChatComponent } from './components/chat/chat.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WordComponent } from './components/word/word.component';
import { ProfileWordlistComponent } from './components/profile-wordlist/profile-wordlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChooseWordComponent } from './components/choose-word/choose-word.component'; 
import { ChooseWordDialogComponent } from './components/choose-word/choose-word.component';
import { TimerComponent } from './components/timer/timer.component';

// const config: SocketIoConfig = { url: 'https://ancient-beach-47155.herokuapp.com/', options: {} };
const config: SocketIoConfig = { url: 'localhost:3000', options: {} };
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { ChooseCategoryDialogComponent } from './components/room-list/room-list.component';
import { JukeboxComponent } from './components/jukebox/jukebox.component';


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
    ProfileComponent,
    ProfileWordlistComponent,
    TimerComponent,
    JukeboxComponent,
    ProfileComponent,
    WordComponent,
    ChooseWordComponent,
    ChooseWordDialogComponent,
    TimerComponent,
    ChooseCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId
    }),
    RouterModule.forRoot([
      {path:"lobby", component: LobbyComponent},
      {path:"room-list", component: RoomListComponent},
      {path: "game", component: GameComponent},
      {path:"login", component: LoginComponent},
      {path:"game", component: GameComponent},
      {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]}
    ]),
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    SocketIoModule.forRoot(config),
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [SocketIoService, ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
