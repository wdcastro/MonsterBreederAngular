import { Injectable } from '@angular/core';
import { UserData, TimeData, LoginResult, SaveData } from '../network/dataobjects';
import { Monster } from '../gameobjects/monster';

import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class NetworkManager{



  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http){

  }

  login(userdata:UserData): Promise<LoginResult>{

    console.log("login()");
    return this.http.post("http://localhost:8080/login", userdata, this.options)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

/*
  getMonster(userdata:UserData): Promise<Monster>{
    console.log("getMonster()");
    return this.http.post("http://localhost:8080/load", userdata, this.options)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }
  */

  saveGame(savedata:SaveData): Promise<SaveData>{
    console.log("network: saveGame()");
    console.log(savedata);
    return this.http.post("http://localhost:8080/save", savedata, this.options)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  loadGame(userdata:UserData): Promise<SaveData>{
    console.log("network: loadGame()");
    console.log(userdata);
    return this.http.post("http://localhost:8080/load", userdata, this.options)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  getTime(userdata:UserData): Promise<TimeData> {
    console.log("network: getTime()");
    return this.http.post("http://localhost:8080/time", userdata, this.options)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }


  /*postAction(): Promise<ActionResult> {
    console.log("getAction() started");
    var ga = new GameAction();
    ga.id = "asdf";
    ga.content = "Mary had a little lamb baaaa";
    return this.http.post(this.heroesUrl, JSON.stringify({id: ga.id, content: ga.content}), this.options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }*/


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
