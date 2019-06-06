import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {del} from 'selenium-webdriver/http';

@Component({
  selector: 'app-checkbox',
  template: `
  <ul style="list-style: none">
      <li *ngFor="let el of objFrom" >{{ el.text }} {{el.some}}<input type="checkbox"/>
        <span *ngIf="valOfCheck">DONE</span> <button (click)="change(false)">DELETE</button></li>
  </ul>`
})

export class CheckboxComponent implements OnInit {
  constructor() {}
  valOfCheck = false;
  @Input() objFrom: object[];
  @Input() some: number;
  @Input() delVal: boolean;
    @Output() Changed = new EventEmitter<boolean>();
    change(inc: any) {
      this.Changed.emit(inc);
    }
  ngOnInit(): void {}
  checkedOrNo() {
    this.valOfCheck = !this.valOfCheck; }
}

