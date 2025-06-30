import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSection } from './teacher-section';

describe('TeacherSection', () => {
  let component: TeacherSection;
  let fixture: ComponentFixture<TeacherSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
