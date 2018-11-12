import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from '@app/shared/cards-list/list/list.component';
import { CardsListComponent } from './cards-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsListComponent, ListComponent],
  exports: [CardsListComponent]
})
export class CardsListModule {}
