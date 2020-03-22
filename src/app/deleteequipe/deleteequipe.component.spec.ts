import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteequipeComponent } from './deleteequipe.component';

describe('DeleteequipeComponent', () => {
  let component: DeleteequipeComponent;
  let fixture: ComponentFixture<DeleteequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
