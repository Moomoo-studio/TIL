import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponent1Component } from './my-new-component1.component';

describe('MyNewComponent1Component', () => {
  let component: MyNewComponent1Component;
  let fixture: ComponentFixture<MyNewComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
