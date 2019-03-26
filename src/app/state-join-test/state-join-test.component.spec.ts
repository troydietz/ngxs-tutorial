import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateJoinTestComponent } from './state-join-test.component';

describe('StateJoinTestComponent', () => {
  let component: StateJoinTestComponent;
  let fixture: ComponentFixture<StateJoinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateJoinTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateJoinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
