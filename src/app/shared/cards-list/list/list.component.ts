import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() public tableRef: TemplateRef<any>;
  @Input() public data: any;
}
