import { Component } from '@angular/core';

export interface Department {
  departmentCode: number;    // Код_кафедры
  departmentName: string;    // Название_кафедры
  headFullName?: string;     // ФИО_заведующего
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments: Department[] = [];
  
  newDepartment: Department = {
    departmentCode: 0,
    departmentName: '',
    headFullName: ''
  };

  editingDepartment: Department | null = null;
  editingIndex: number | null = null;

  addDepartment() {
    if (this.newDepartment.departmentCode === 0) {
      this.newDepartment.departmentCode = this.generateNextCode();
    }
    
    if (this.isDepartmentValid(this.newDepartment)) {
      this.departments.push({ ...this.newDepartment });
      this.resetNewDepartment();
    }
  }

  private generateNextCode(): number {
    return this.departments.reduce((max, dep) => 
      Math.max(max, dep.departmentCode), 0) + 1;
  }

  public isDepartmentValid(dep: Department): boolean {
    return dep.departmentCode >= 0 &&
           !!dep.departmentName &&
           !this.departments.some(d => 
             d.departmentName === dep.departmentName);
  }

  editDepartment(index: number) {
    this.editingIndex = index;
    this.editingDepartment = { ...this.departments[index] };
  }

  saveDepartment() {
    if (this.editingIndex !== null && 
        this.editingDepartment && 
        this.isDepartmentValid(this.editingDepartment)) {
      this.departments[this.editingIndex] = this.editingDepartment;
      this.cancelEdit();
    }
  }

  deleteDepartment(code: number) {
    this.departments = this.departments.filter(d => 
      d.departmentCode !== code);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingDepartment = null;
  }

  resetNewDepartment() {
    this.newDepartment = {
      departmentCode: 0,
      departmentName: '',
      headFullName: ''
    };
  }
}