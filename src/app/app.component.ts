import { Component } from '@angular/core';
import { ActionBarComponent } from './actionbar/actionbar.component';
import { UserSetupForm } from './mainmenu/usersetup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monster Breeder Game';
}
