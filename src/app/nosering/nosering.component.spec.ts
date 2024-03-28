import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseringComponent } from './nosering.component';

describe('NoseringComponent', () => {
  let component: NoseringComponent;
  let fixture: ComponentFixture<NoseringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoseringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoseringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
