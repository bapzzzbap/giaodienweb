import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtinhComponent } from './formtinh.component';

describe('FormtinhComponent', () => {
  let component: FormtinhComponent;
  let fixture: ComponentFixture<FormtinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
