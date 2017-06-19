import { Injectable } from '@angular/core';
import { MonsterController } from './monstercontroller.service';
import { PlayerController } from './playercontroller.service';
import { NetworkManager } from '../network/network.service';
import { SaveData, UserData } from '../network/dataobjects';

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
      console.log("gamecontroller: refreshTime()");
      this.networkmanager.getTime(this.playercontroller.userdata).then(response => this.playercontroller.previousTimeStamp = response.timestamp);
  }

  save(){
    console.log("gamecontroller: save()");
    var savedata:SaveData = new SaveData();
    savedata.userdata = this.playercontroller.userdata;
    savedata.monster = this.monstercontroller.monster;
    savedata.playerdata = this.playercontroller.playerdata;
    console.log(savedata);
    this.networkmanager.saveGame(savedata).then(response => console.log(response));
  }


  load(response:SaveData){
    console.log("gamecontroller: load()");
    this.playercontroller.loadUserData(response.userdata);
    this.playercontroller.loadPlayerData(response.playerdata);
    this.monstercontroller.loadMonster(response.monster);

  }

  update(){
    this.playercontroller.update();
    this.monstercontroller.update();
  }
}
