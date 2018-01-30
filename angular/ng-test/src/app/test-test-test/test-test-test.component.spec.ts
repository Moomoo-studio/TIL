import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTestTestComponent } from './test-test-test.component';

describe('TestTestTestComponent', () => {
  let component: TestTestTestComponent;
  let fixture: ComponentFixture<TestTestTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTestTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTestTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
