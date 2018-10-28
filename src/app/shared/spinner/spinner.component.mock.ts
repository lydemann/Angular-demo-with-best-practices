import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: '',
})
export class SpinnerComponentMock implements OnInit {

  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }

}
