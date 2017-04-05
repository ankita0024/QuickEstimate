import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjComponent } from './active-proj.component';

describe('ActiveProjComponent', () => {
  let component: ActiveProjComponent;
  let fixture: ComponentFixture<ActiveProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
