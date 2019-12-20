import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCountIconComponent } from './ticket-count-icon.component';

describe('TicketCountIconComponent', () => {
  let component: TicketCountIconComponent;
  let fixture: ComponentFixture<TicketCountIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCountIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCountIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
