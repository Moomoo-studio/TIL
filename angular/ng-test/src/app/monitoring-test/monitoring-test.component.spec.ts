import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringTestComponent } from './monitoring-test.component';

describe('MonitoringTestComponent', () => {
  let component: MonitoringTestComponent;
  let fixture: ComponentFixture<MonitoringTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
