import { Component } from '@angular/core';

export interface Developer {
  code: number;
  name: string;
}

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developers: Developer[] = [];
  
  newDeveloper: Developer = {
    code: 0,
    name: ''
  };

  editingDeveloper: Developer | null = null;
  editingIndex: number | null = null;

  addDeveloper() {
    if (this.newDeveloper.code === 0) {
      this.newDeveloper.code = this.generateNextCode();
    }
    
    if (this.isDeveloperValid(this.newDeveloper)) {
      this.developers.push({ ...this.newDeveloper });
      this.resetNewDeveloper();
    }
  }

  private generateNextCode(): number {
    return this.developers.reduce((max, dev) => Math.max(max, dev.code), 0) + 1;
  }

  public isDeveloperValid(dev: Developer): boolean {
    return dev.code >= 0 && 
           !!dev.name &&
           !this.developers.some(d => d.name === dev.name);
  }

  editDeveloper(index: number) {
    this.editingIndex = index;
    this.editingDeveloper = { ...this.developers[index] };
  }

  saveDeveloper() {
    if (this.editingIndex !== null && this.editingDeveloper && this.isDeveloperValid(this.editingDeveloper)) {
      this.developers[this.editingIndex] = this.editingDeveloper;
      this.cancelEdit();
    }
  }

  deleteDeveloper(code: number) {
    this.developers = this.developers.filter(d => d.code !== code);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingDeveloper = null;
  }

  resetNewDeveloper() {
    this.newDeveloper = { code: 0, name: '' };
  }
}