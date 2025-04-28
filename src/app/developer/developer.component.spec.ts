import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DeveloperComponent } from './developer.component';

describe('DeveloperComponent', () => {
  let component: DeveloperComponent;
  let fixture: ComponentFixture<DeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should add new developer', () => {
    component.newDeveloper = { code: 1, name: 'Microsoft' };
    component.addDeveloper();
    expect(component.developers.length).toBe(1);
    expect(component.developers[0].name).toBe('Microsoft');
  });

  it('should validate developer correctly', () => {
    const validDev = { code: 1, name: 'Apple' };
    const invalidDev = { code: -1, name: '' };
    
    expect(component.isDeveloperValid(validDev)).toBeTrue();
    expect(component.isDeveloperValid(invalidDev)).toBeFalse();
  });

  it('should prevent duplicate names', () => {
    component.developers = [{ code: 1, name: 'Oracle' }];
    const duplicateDev = { code: 2, name: 'Oracle' };
    expect(component.isDeveloperValid(duplicateDev)).toBeFalse();
  });
});