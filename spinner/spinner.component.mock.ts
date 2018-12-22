import { Component, Input, OnInit } from '@angular/core';
import { SpinnerComponent } from '@shared-lib/spinner/spinner.component';

@Component({
  selector: 'app-spinner',
  template: ''
})
export class SpinnerComponentMock implements OnInit, SpinnerComponent {
  @Input() message = '';

  constructor() {}

  ngOnInit() {}
}
