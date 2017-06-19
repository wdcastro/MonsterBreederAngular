import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NetworkManager } from '../network/network.service';
import { UserData, SaveData } from '../network/dataobjects';
import { PlayerController } from '../gamecomponent/playercontroller.service';
import { MonsterController } from '../gamecomponent/monstercontroller.service';
import { GameController } from '../gamecomponent/gamecontroller.service';
import { Monster } from '../gameobjects/monster';
import { Router } from '@angular/router';
import { LoginResult } from '../network/dataobjects';

@Component({
  selector: 'user-setup',
  templateUrl: './usersetup.component.html'
})
export class UserSetupForm {

  constructor(private gamecontroller:GameController, private router:Router, private network:NetworkManager, private playercontroller:PlayerController, private monstercontroller:MonsterController ){

  }

  parentrouter = this.router;
  userdata:UserData = new UserData();

  userForm = new FormGroup ({
    name: new FormControl(),
    monstername: new FormControl()
  });

  submit(){
    this.userdata.authKey = 1234;
    this.userdata.userID = this.userForm.value.name;
    console.log(this.userdata);
    this.network.login(this.userdata).then(response => this.handleLoginResponse(response));
  }

  handleLoginResponse(response:LoginResult){
    console.log(response);
    switch(response.logincode){
      case 1:
      //login success
      alert("Login success");
      this.playercontroller.setUserData(response.userdata);
      this.network.loadGame(response.userdata)
      .then(response => this.loadUser(response));
      break;
      case 2:
      //wrong password
      alert("Incorrect password");
      this.userForm.reset();
      break;
      case 3:
      //user created
      alert("Registered as new user");
      this.makeUser(this.userdata);
      break;
      default:
      console.log(response.logincode);

    }
  }

  loadUser(response:SaveData){
    console.log("usersetupcomponent: loadUser");
    console.log(response);
    this.gamecontroller.load(response);
    this.gamecontroller.startGame();
    this.goToGame();
  }

  goToGame(){
    this.gamecontroller.save();
    this.parentrouter.navigateByUrl('/game');
  }

  makeUser(userdata:UserData){
    console.log("usersetupcomponent: makeUser()");
    console.log("userID: " + userdata.userID + " authKey: "+ userdata.authKey);
    this.playercontroller.setUserData(userdata);
    this.monstercontroller.makeMonster(userdata.userID, this.userForm.value.monstername);
    this.gamecontroller.startGame();
    this.goToGame();
  }
}
