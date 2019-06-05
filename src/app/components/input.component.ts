import {Component, OnInit} from '@angular/core';

import {CheckboxComponent} from './checkbox.component';

@Component({
  selector: 'app-input',
  template: '' +
    '<form>' +
    '<input type="text" (change)="valOfInput($event)"/> ' +
    '<input type="submit" (click)="addToList($event)"/> ' +
    '</form> ' +
    '<ul style="list-style: none">' +
    '<li *ngFor="let el of listVal">{{ el }}<app-checkbox></app-checkbox></li>' +
    '</ul>'

})

export class InputComponent implements  OnInit {
 constructor() {}

  listVal: string[] = [];
  valInput: string;



 ngOnInit(): void {
 }

  valOfInput(event) {
    this.valInput = event.target.value;
  }

  addToList(event) {
     event.preventDefault();
     this.listVal.push(this.valInput);
 }
}
