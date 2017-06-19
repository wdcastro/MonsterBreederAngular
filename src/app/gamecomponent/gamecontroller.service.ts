import { Injectable } from '@angular/core';
import { MonsterController } from './monstercontroller.service';
import { PlayerController } from './playercontroller.service';
import { NetworkManager } from '../network/network.service';
import { SaveData } from '../network/dataobjects';

@Injectable()
export class GameController{

  constructor (private monstercontroller: MonsterController, private playercontroller: PlayerController, private networkmanager: NetworkManager){

  }

  startGame(){
    console.log("startGame()");
    this.refreshTime();
    setInterval(()=> this.update(), 1000);
  }

  refreshTime(){
      this.networkmanager.getTime(this.playercontroller.userdata).then(response => this.playercontroller.previousTimeStamp = response.timestamp);
  }

  save(){
    var savedata:SaveData = new SaveData();
    savedata.userdata = this.playercontroller.userdata;
    savedata.monster = this.monstercontroller.monster;
    console.log(savedata);
    this.networkmanager.saveMonster(savedata).then(response => console.log(response));
  }

  update(){
    console.log("updating");
    this.playercontroller.update();
    this.monstercontroller.update();
  }
}
