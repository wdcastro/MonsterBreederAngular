import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSetupForm } from '../mainmenu/usersetup.component';
import { GameComponent } from '../gamecomponent/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  { path: 'register',     component: UserSetupForm }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
