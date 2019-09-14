import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetalisComponent } from './student-detalis.component';

describe('StudentDetalisComponent', () => {
  let component: StudentDetalisComponent;
  let fixture: ComponentFixture<StudentDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
