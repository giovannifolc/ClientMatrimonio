import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecipantiContComponent } from './partecipanti-cont.component';

describe('PartecipantiContComponent', () => {
  let component: PartecipantiContComponent;
  let fixture: ComponentFixture<PartecipantiContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartecipantiContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartecipantiContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
