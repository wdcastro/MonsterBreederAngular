import { Injectable, OnInit } from '@angular/core';
import { Monster } from '../gameobjects/monster';


@Injectable()
export class MonsterController{
  monster:Monster;

  trainingtick:number = 0;
  traininghungertick:number = 1;
  hungertick:number = 0;

  gethungrysecs:number = 60;

  constructor(){
  }

  update(){
    this.hungertick++;
    if(this.hungertick > this.gethungrysecs){
      this.hungertick = 0;
      this.monster.getHungry();
    }
  }

  startGame(owner:string, name:string){

    //check for load game
    this.monster = new Monster(name, owner);
  }


  getMonster(){
    return this.monster;
  }


  feedMonster(){
    this.monster.getLessHungry();
    /*this.monster.hp += Math.floor(Math.random()*2);
    this.monster.atk += Math.floor(Math.random()*2);
    this.monster.def += Math.floor(Math.random()*2);
    this.monster.spd += Math.floor(Math.random()*2);
    this.monster.eva += Math.floor(Math.random()*2);
    console.log("hp:"+this.monster.hp+", atk:" + this.monster.atk+", def:"+ this.monster.def+", spd:"+ this.monster.spd+", eva:"+this.monster.eva);
    */
  }

  trainMonster(){
    this.monster.experience += Math.floor((Math.random()*200*this.monster.level) + 50*this.monster.level);

    if(this.trainingtick < this.traininghungertick){
      this.trainingtick++;
    } else {
      this.trainingtick = 0;
      this.monster.getHungry();
    }

    if(this.monster.experience >= this.monster.expToNext){
      this.monster.levelUp();
      this.save();
    }
  }

  save(){

  }

  load(monster:Monster){
    console.log("Loading monster");
    console.log(this.monster);
    this.monster = new Monster("","");
    this.monster.loadMonster(monster);
  }



}
