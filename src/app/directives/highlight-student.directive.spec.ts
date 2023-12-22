import { TestBed } from '@angular/core/testing';
import { HighlightStudentDirective } from './highlight-student.directive';

describe('HighlightStudentDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [HighlightStudentDirective]
    });
    const fixture = TestBed.createComponent(HighlightStudentDirective);
    const directive = fixture.componentInstance;
    expect(directive).toBeTruthy();
  });
});
