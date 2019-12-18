import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStackComponent } from './ticket-stack.component';

describe('TicketStackComponent', () => {
  let component: TicketStackComponent;
  let fixture: ComponentFixture<TicketStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
