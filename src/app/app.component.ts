import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TodoListService } from './core/todo-list/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(translate: TranslateService, private todoListService: TodoListService) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.todoListService.loadTodoList();
  }
}
