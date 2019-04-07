import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { TodoListStoreModule } from '../todo-list/redux-api/todo-list-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TodoListStoreModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Testing Store DevTools',
      logOnly: environment.production
    })
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
