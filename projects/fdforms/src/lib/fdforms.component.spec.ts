import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdformsComponent } from './fdforms.component';

describe('FdformsComponent', () => {
  let component: FdformsComponent;
  let fixture: ComponentFixture<FdformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
