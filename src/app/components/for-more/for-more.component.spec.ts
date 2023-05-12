import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMoreComponent } from './for-more.component';

describe('ForMoreComponent', () => {
  let component: ForMoreComponent;
  let fixture: ComponentFixture<ForMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
