import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InShortComponent } from './in-short.component';

describe('InShortComponent', () => {
  let component: InShortComponent;
  let fixture: ComponentFixture<InShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
