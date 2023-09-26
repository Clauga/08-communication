import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia-component',
  templateUrl: './create-onomatopia-component.component.html',
  styleUrls: ['./create-onomatopia-component.component.css']
})
export class CreateOnomatopiaComponentComponent {
newOnomatopia: string = '';

@Output() sendOnomatopia = new EventEmitter<string>();

createOnomatopia() {
  this.sendOnomatopia.emit(this.newOnomatopia);
  this.newOnomatopia = '';
}

}
