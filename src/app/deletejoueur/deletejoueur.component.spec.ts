import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletejoueurComponent } from './deletejoueur.component';

describe('DeletejoueurComponent', () => {
  let component: DeletejoueurComponent;
  let fixture: ComponentFixture<DeletejoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletejoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletejoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
