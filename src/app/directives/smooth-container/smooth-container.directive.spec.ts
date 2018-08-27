import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothContainerDirective } from './smooth-container.directive';

@Component({
  selector: 'my-test-component',
  template: '<div smoothContainer #test></div>',
})
export class TestComponent {}

describe('SmoothContainerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmoothContainerDirective, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new SmoothContainerDirective();
    expect(directive).toBeTruthy();
  });

  it('should be hosted on a component', () => {
    expect(component).toBeTruthy();
  });
});
