import {Component} from '@angular/core';
import {MonsterController} from '../gamecomponent/monstercontroller.service';
import {PlayerController} from '../gamecomponent/playercontroller.service';

@Component({
  selector: 'detail-pane',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

constructor (public monstercontroller: MonsterController, public playercontroller:PlayerController){
}


}
