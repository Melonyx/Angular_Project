import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department.component';

describe('DepartmentComponent', () => {
  let component: DepartmentComponent;
  let fixture: ComponentFixture<DepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should add valid department', () => {
    component.newDepartment = {
      departmentCode: 1,
      departmentName: 'Кафедра математики',
      headFullName: 'Иванов И.И.'
    };
    component.addDepartment();
    expect(component.departments.length).toBe(1);
  });

  it('should block duplicate department names', () => {
    component.departments = [{
      departmentCode: 1,
      departmentName: 'Физика',
      headFullName: 'Петров П.П.'
    }];
    
    const duplicateDep = {
      departmentCode: 2,
      departmentName: 'Физика',
      headFullName: 'Сидоров С.С.'
    };
    
    expect(component.isDepartmentValid(duplicateDep)).toBeFalse();
  });

  it('should validate required fields', () => {
    const invalidDep = { departmentCode: 0, departmentName: '' };
    expect(component.isDepartmentValid(invalidDep)).toBeFalse();
  });
});