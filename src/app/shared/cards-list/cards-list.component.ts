import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  typeToShow: 'cards' | 'list' = 'list';

  constructor() {}

  ngOnInit() {}

  showCards() {
    this.typeToShow = 'cards';
  }

  showList() {
    this.typeToShow = 'list';
  }
}
