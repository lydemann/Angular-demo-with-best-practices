import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() public cardRef: TemplateRef<any>;
  @Input() public data: any;

  constructor() {}

  public ngOnInit() {}
}
