import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedProjComponent } from './saved-proj.component';

describe('SavedProjComponent', () => {
  let component: SavedProjComponent;
  let fixture: ComponentFixture<SavedProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
