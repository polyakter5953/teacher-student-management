import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSection } from './student-section';

describe('StudentSection', () => {
  let component: StudentSection;
  let fixture: ComponentFixture<StudentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
