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

export class LoginResult{
  userID:string;
  authKey:number;
  loginCode:number;
}

export class SaveData {
  userdata:UserData;
  monster:Monster;
}
