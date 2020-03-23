import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearbitresComponent } from './deletearbitres.component';

describe('DeletearbitresComponent', () => {
  let component: DeletearbitresComponent;
  let fixture: ComponentFixture<DeletearbitresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletearbitresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletearbitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
