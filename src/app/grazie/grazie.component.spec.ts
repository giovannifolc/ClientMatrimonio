import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrazieComponent } from './grazie.component';

describe('GrazieComponent', () => {
  let component: GrazieComponent;
  let fixture: ComponentFixture<GrazieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrazieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrazieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
