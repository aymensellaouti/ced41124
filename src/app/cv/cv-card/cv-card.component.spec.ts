import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCArdComponent } from './cv-card.component';

describe('CvCArdComponent', () => {
  let component: CvCArdComponent;
  let fixture: ComponentFixture<CvCArdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvCArdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvCArdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
