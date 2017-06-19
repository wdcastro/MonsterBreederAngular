import { Component } from '@angular/core';
import { DetailsComponent } from '../detailcomponent/details.component';
import { ActionBarComponent } from '../actionbar/actionbar.component';

import { PlayerController } from '../gamecomponent/playercontroller.service';

import { Router } from '@angular/router';

@Component({
  selector: 'gamecomponent',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {



  constructor(private router:Router, private playercontroller:PlayerController){
    if(this.playercontroller.userdata === undefined){
      console.log("undefined player");
      this.router.navigateByUrl('/register');
    }
  }
}
