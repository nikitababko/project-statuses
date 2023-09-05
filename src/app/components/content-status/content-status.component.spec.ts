import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStatusComponent } from './content-status.component';

describe('ContentStatusComponent', () => {
  let component: ContentStatusComponent;
  let fixture: ComponentFixture<ContentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentStatusComponent],
    });
    fixture = TestBed.createComponent(ContentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
