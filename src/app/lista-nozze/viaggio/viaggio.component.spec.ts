import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggioComponent } from './viaggio.component';

describe('ViaggioComponent', () => {
  let component: ViaggioComponent;
  let fixture: ComponentFixture<ViaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaggioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
