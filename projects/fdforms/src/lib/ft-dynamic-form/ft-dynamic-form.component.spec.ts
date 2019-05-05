import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtDynamicFormComponent } from './ft-dynamic-form.component';

describe('FtDynamicFormComponent', () => {
  let component: FtDynamicFormComponent;
  let fixture: ComponentFixture<FtDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
