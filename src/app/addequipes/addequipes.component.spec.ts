import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddequipesComponent } from './addequipes.component';

describe('AddequipesComponent', () => {
  let component: AddequipesComponent;
  let fixture: ComponentFixture<AddequipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddequipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddequipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
