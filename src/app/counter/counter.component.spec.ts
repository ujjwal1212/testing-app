import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing clicks functionality', () => {
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText, 10));
  });
});
