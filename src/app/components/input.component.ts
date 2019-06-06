import {Component, OnInit, Input} from '@angular/core';

import {CheckboxComponent} from './checkbox.component';

@Component({
  selector: 'app-input',
  template: `<form><input type="text"  (change)="valOfInput($event)"/><input type="submit" (click)="addToList($event)"/>
    </form> <app-checkbox (Changed)="Changed()" [objFrom]="listVal" *ngIf="valOfDel"></app-checkbox>
             `
})
export class InputComponent implements  OnInit {
 constructor() {}
 listVal: object[] = [];
 valInput: string;
 valDate = new Date();
 day = this.valDate.getDay();
 month = this.valDate.getMonth();
 year = this.valDate.getFullYear();
 valOfDel = true;

Changed(inc: any) {
  this.valOfDel = inc;
}
 ngOnInit(): void {
 }
 valOfInput(event) {
   this.valInput = event.target.value; }
 addToList(event) {
   event.preventDefault();
   this.listVal.push({ text: this.valInput, some: `${this.day}.${this.month}.${this.year}`});
   console.log(this.valOfDel); }
}
