import { Component, Input } from '@angular/core';

import { ProjectType } from '../content/content.types';
import { isNotNull } from './row-item.helpers';

@Component({
  selector: 'row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.scss'],
})
export class RowItemComponent {
  @Input() item: ProjectType | null = null;

  getContentClass() {
    if (isNotNull<ProjectType>(this.item)) {
      if (this.item.status === 2) {
        return ['row-item__icon-wrapper', 'row-item__icon-wrapper_success'];
      }

      return ['row-item__icon-wrapper', 'row-item__icon-wrapper_error'];
    }

    return 'row-item__icon-wrapper';
  }

  getIconName() {
    if (isNotNull(this.item)) {
      if (this.item.status === 2) {
        return 'check-mark';
      }

      return 'cross';
    }

    return 'cross';
  }
}
