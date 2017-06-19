import { Monster } from '../gameobjects/monster';

export class GameAction {
  id:string;
  content:string;
}

export class ActionResult {
  result:string;
}

export class UserData {

  userID:string;
  authKey:number;
}

export class TimeData{
  timestamp:number;
  userID:string;
}

export class PlayerData{
  food:number;
  stamina:number;
  pvptokens:number;
  lasttimestamp:number;
}

export class LoginResult{
  userdata: UserData;
  logincode:number;
}

export class SaveData {
  userdata:UserData;
  playerdata:PlayerData;
  monster:Monster;
}
