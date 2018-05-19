import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAmountOfTODOs() {
    return element(by.css('.todo-item')).count;
  }
}
