import { Component } from '@angular/core';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css']
})
export class AppComponentComponent {
  onomatopiaList: string[] = [];

  onReceiveNewOnomatopia(NewOnomatopia: string) {
    this.onomatopiaList.push(NewOnomatopia);
  }
}
