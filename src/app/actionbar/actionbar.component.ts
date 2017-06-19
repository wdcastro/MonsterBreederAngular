import { Component, OnInit } from '@angular/core';

import { MonsterController } from '../gamecomponent/monstercontroller.service';
import { PlayerController } from '../gamecomponent/playercontroller.service';
import { GameController } from '../gamecomponent/gamecontroller.service';
import { ActionService } from './action.service';

@Component({
  selector: 'actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionBarComponent implements OnInit{



constructor(private gamecontroller:GameController , private monstercontroller:MonsterController, private playercontroller:PlayerController){
}


  feedMonster(){
    if(this.playercontroller.food > 0){
      this.playercontroller.eatFood();
      this.monstercontroller.feedMonster();
    } else {
      alert("Not enough food");
    }
  }

  trainMonster(){
    if(this.playercontroller.stamina > 0){
      this.playercontroller.useStamina();
      this.monstercontroller.trainMonster();
    } else {
      alert("Not enough stamina");
    }

  }

  newMonster(){
  }

  battle(){
    this.gamecontroller.save();
  }

  ngOnInit(): void{
  }

}
