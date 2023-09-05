import { Component, OnInit } from '@angular/core';
import { projects } from './content.data';
import { ProjectType } from './content.types';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  projects: ProjectType[] = projects;

  someProjectHasError = true;

  /* eslint-disable class-methods-use-this */
  trackBy(index: number, item: ProjectType) {
    return item.name;
  }

  ngOnInit() {
    const newArr = this.projects.map((project) => fetch(project.url).then((data) => ({
      name: project.name,
      url: project.url,
      status: data.status,
    })));

    Promise.all(newArr)
      .then((data) => {
        this.someProjectHasError = data.some((project) => project.status === 400);
        this.projects = data;
      })
      .catch((e) => console.error('Get projects use fetch', e));
  }
}
