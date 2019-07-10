import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from '@app/app.component';
import { TodoListService } from './core/todo-list/todo-list.service';
import { FooterComponentMock } from './footer/FooterComponentMock';
import { provideMagicalMock } from './helpers/spy-helper';
import { NavbarComponentMock } from './navbar/navbar.component.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponentMock, FooterComponentMock],
      imports: [],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        provideMagicalMock(TranslateService),
        provideMagicalMock(TodoListService)
      ]
    })
      .overrideTemplate(AppComponent, '')
      .compileComponents();
  }));

  let translateServiceMock: jasmine.SpyObj<TranslateService>;
  it('should create the app', async(() => {
    translateServiceMock = TestBed.get(TranslateService);
    translateServiceMock.getBrowserLang.and.returnValue('en');
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
