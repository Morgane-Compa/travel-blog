import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTravelComponent } from './the-travel.component';

describe('TheTravelComponent', () => {
  let component: TheTravelComponent;
  let fixture: ComponentFixture<TheTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
