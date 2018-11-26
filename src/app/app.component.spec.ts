import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponentMock } from './footer/footer.component.mock';
import { SpyHelper } from './helpers/spy-helper';
import { NavbarComponentMock } from './navbar/navbar.component.mock';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponentMock, FooterComponentMock],
      imports: [],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        SpyHelper.provideMagicalMock(TranslateService)
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
