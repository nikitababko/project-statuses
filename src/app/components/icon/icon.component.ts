import { Component, Input } from '@angular/core';

import { IconNameType, IconSizeType } from './icon.types';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() name: IconNameType = 'check-mark';

  @Input() size: IconSizeType = {
    width: 17,
    height: 17,
  };
}
