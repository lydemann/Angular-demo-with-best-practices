import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from '@app/shared/cards-list/list/list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CardsListComponent } from './cards-list.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [CardsListComponent, ListComponent],
  exports: [CardsListComponent]
})
export class CardsListModule {}
