import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTechComponent } from './forms-tech.component';

describe('FormsTechComponent', () => {
  let component: FormsTechComponent;
  let fixture: ComponentFixture<FormsTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
