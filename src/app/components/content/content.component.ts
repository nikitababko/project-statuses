import { Component, OnInit } from '@angular/core';

import { ProjectType } from './content.types';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  projects: ProjectType[] | null = null;

  isLoading = true;

  resStatus = 200;

  someProjectHasError = true;

  /* eslint-disable class-methods-use-this */
  trackBy(index: number, item: ProjectType) {
    return item.friendly_name;
  }

  ngOnInit() {
    this.isLoading = true;

    fetch('https://api.uptimerobot.com/v2/getMonitors?api_key=ur2323626-cc18c4bc97af9d6baf0ec0ab', {
      method: 'POST',
    })
      .then(async (data) => {
        this.resStatus = data.status;
        return data.json();
      })
      .then((data) => {
        this.someProjectHasError = data.monitors.some(
          (project: ProjectType) => project.status !== 2,
        );
        this.projects = data.monitors;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
