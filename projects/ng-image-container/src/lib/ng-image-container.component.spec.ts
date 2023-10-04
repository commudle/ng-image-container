import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageContainerComponent } from './ng-image-container.component';

describe('NgImageContainerComponent', () => {
  let component: NgImageContainerComponent;
  let fixture: ComponentFixture<NgImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgImageContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
