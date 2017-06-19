import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailsComponent } from './detailcomponent/details.component';
import { ActionService } from './actionbar/action.service';
import { ActionBarComponent } from './actionbar/actionbar.component';
import { GameComponent } from './gamecomponent/game.component';
import { MonsterController } from './gamecomponent/monstercontroller.service';
import { PlayerController } from './gamecomponent/playercontroller.service';
import { NetworkManager } from './network/network.service';
import { UserSetupForm } from './mainmenu/usersetup.component';
import { GameController } from './gamecomponent/gamecontroller.service';

import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ActionBarComponent,
    GameComponent,
    UserSetupForm
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [ActionService, MonsterController, PlayerController, NetworkManager, GameController],
  bootstrap: [AppComponent]
})
export class AppModule { }
