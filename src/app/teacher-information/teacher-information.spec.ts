import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInformation } from './teacher-information';

describe('TeacherInformation', () => {
  let component: TeacherInformation;
  let fixture: ComponentFixture<TeacherInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
