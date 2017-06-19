import { Injectable } from '@angular/core';
import { UserData, PlayerData } from '../network/dataobjects';


@Injectable()
export class PlayerController{

  userdata:UserData;
  playerdata:PlayerData;

  previousTimeStamp:number = -1;
  currentTimeStamp:number = -1;

  maxstamina:number = 10;
  maxfood:number = 5;
  maxpvptokens:number = 3;


  foodcooldown:number = 30000;
  staminacooldown:number = 20000;


  nextFoodSecs:number = 0;
  nextStamSecs:number = 0;

  constructor(){
    this.playerdata = new PlayerData();
    this.playerdata.food = this.maxfood;
    this.playerdata.stamina = this.maxstamina;
    this.playerdata.pvptokens = this.maxpvptokens;
  }

  update(){
    if(this.currentTimeStamp === -1){
      this.currentTimeStamp = this.previousTimeStamp;
      this.nextFoodSecs = this.foodcooldown/1000;
      this.nextStamSecs = this.staminacooldown/1000;
    } else {
      this.currentTimeStamp += 1000;
      this.nextFoodSecs -= 1;
      this.nextStamSecs -= 1;
    }

    if((this.currentTimeStamp - this.previousTimeStamp)%this.foodcooldown === 0){
      this.addFood();
      this.nextFoodSecs = this.foodcooldown/1000;
    }

    if((this.currentTimeStamp - this.previousTimeStamp)%this.staminacooldown === 0){
      this.addStamina();
      this.nextStamSecs = this.staminacooldown/1000;
    }
  }

  eatFood(){
    this.playerdata.food--;
    if(this.playerdata.food < 0){
      this.playerdata.food = 0;
    }
  }

  useStamina(){
    this.playerdata.stamina--;
    if(this.playerdata.stamina < 0){
      this.playerdata.stamina = 0;
    }
  }

  addStamina(){
    this.playerdata.stamina++;
    if(this.playerdata.stamina > this.maxstamina){
      this.playerdata.stamina = this.maxstamina;
    }
  }

  addFood(){
    this.playerdata.food++;
    if(this.playerdata.food > this.maxfood){
      this.playerdata.food = this.maxfood;
    }
  }

  setUserData(userdata:UserData){
    console.log("playercontroller: setUserData");
    this.userdata = userdata;
  }

  loadUserData(userdata:UserData){
    console.log("playercontroller: loadUserData");
    console.log(userdata);
    var ud:UserData = new UserData();
    ud.userID = userdata.userID;
    ud.authKey = userdata.authKey;
    this.userdata = ud;
    console.log(ud);
  }

  loadPlayerData(playerdata:PlayerData){
    console.log("playercontroller: loadPlayerData");
    console.log(playerdata);
    var pd = new PlayerData();
    pd.food = playerdata.food;
    pd.stamina = playerdata.stamina;
    pd.lasttimestamp = playerdata.lasttimestamp;
    pd.pvptokens = playerdata.pvptokens;
    this.playerdata = pd;
    this.eventsSinceLastLogin();
  }

  eventsSinceLastLogin(){
    //things missed out, such as health decay
    //save
  }

}
