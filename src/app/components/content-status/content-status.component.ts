import { Component, Input } from '@angular/core';

@Component({
  selector: 'content-status',
  templateUrl: './content-status.component.html',
  styleUrls: ['./content-status.component.scss'],
})
export class ContentStatusComponent {
  @Input() someProjectHasError = true;

  getContentClass() {
    const classArray = ['content__status'];

    if (this.someProjectHasError) {
      classArray.push('content__status_error');

      return classArray;
    }

    classArray.push('content__status_success');

    return classArray;
  }
}
