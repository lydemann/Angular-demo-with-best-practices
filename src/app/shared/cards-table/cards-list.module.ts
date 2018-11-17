import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CardsTableComponent } from './cards-list.component';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule, TranslateModule],
  declarations: [CardsTableComponent, ListComponent, CardsComponent],
  exports: [CardsTableComponent]
})
export class CardListModule {}
