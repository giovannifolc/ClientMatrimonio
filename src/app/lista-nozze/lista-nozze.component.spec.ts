import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNozzeComponent } from './lista-nozze.component';

describe('ListaNozzeComponent', () => {
  let component: ListaNozzeComponent;
  let fixture: ComponentFixture<ListaNozzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNozzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNozzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
