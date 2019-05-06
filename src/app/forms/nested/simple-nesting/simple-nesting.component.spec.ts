import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNestingComponent } from './simple-nesting.component';

describe('SimpleNestingComponent', () => {
  let component: SimpleNestingComponent;
  let fixture: ComponentFixture<SimpleNestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
