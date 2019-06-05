import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: '<input type="checkbox" (change)="checkedOrNo()" />' +
            '<span *ngIf="valOfCheck">DONE in this date: {{day}}.{{month}}.{{year}}</span>'
})

export class CheckboxComponent implements OnInit {


  valOfCheck = false;
  date = new Date();
  day: number = this.date.getDay();
  month: number = this.date.getMonth();
  year: number = this.date.getFullYear();
  constructor() {}

  ngOnInit(): void {
  }

  checkedOrNo() {
    this.valOfCheck = !this.valOfCheck;
  }
}

