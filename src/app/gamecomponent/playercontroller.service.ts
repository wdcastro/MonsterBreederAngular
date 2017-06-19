import { Injectable } from '@angular/core';
import { UserData } from '../network/dataobjects';


@Injectable()
export class PlayerController{

  userdata:UserData;
  previousTimeStamp:number = -1;
  currentTimeStamp:number = -1;
  food:number;
  stamina:number;
  maxstamina:number = 10;
  maxfood:number = 5;

  pvptokens:number;
  maxpvptokens:number = 3;


  foodcooldown:number = 30000;
  staminacooldown:number = 20000;


  nextFoodSecs:number = 0;
  nextStamSecs:number = 0;

  constructor(){
    this.food = this.maxfood;
    this.stamina = this.maxstamina;
    this.pvptokens = this.maxpvptokens;
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
    this.food--;
    if(this.food < 0){
      this.food = 0;
    }
  }

  useStamina(){
    this.stamina--;
    if(this.stamina < 0){
      this.stamina = 0;
    }
  }

  addStamina(){
    this.stamina++;
    if(this.stamina > this.maxstamina){
      this.stamina = this.maxstamina;
    }
  }

  addFood(){
    this.food++;
    if(this.food > this.maxfood){
      this.food = this.maxfood;
    }
  }

  setUserData(userdata:UserData){
    this.userdata = userdata;
  }

}
