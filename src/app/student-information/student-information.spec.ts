import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInformation } from './student-information';

describe('StudentInformation', () => {
  let component: StudentInformation;
  let fixture: ComponentFixture<StudentInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
