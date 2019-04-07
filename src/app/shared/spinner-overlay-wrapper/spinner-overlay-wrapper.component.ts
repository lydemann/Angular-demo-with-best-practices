import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay-wrapper',
  templateUrl: './spinner-overlay-wrapper.component.html',
  styleUrls: ['./spinner-overlay-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerOverlayWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
