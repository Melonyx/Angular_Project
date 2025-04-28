import { Component } from '@angular/core';

export interface Software {
  code: number;    
  name: string;       
  version: string;     
  licenses: number;     
  purchaseDate: Date;    
  developerCode: number; 
  typeCode: number;      
}

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent {
  softwareList: Software[] = [];
  
  newSoftware: Software = {
    code: 0,
    name: '',
    version: '',
    licenses: 0,
    purchaseDate: new Date(),
    developerCode: 0,
    typeCode: 0
  };

  editingSoftware: Software | null = null;
  editingIndex: number | null = null;

  addSoftware() {
    if (this.newSoftware.code === 0) {
      this.newSoftware.code = this.generateNextCode();
    }
    
    if (this.isSoftwareValid(this.newSoftware)) {
      this.softwareList.push({ ...this.newSoftware });
      this.resetNewSoftware();
    }
  }

  private generateNextCode(): number {
    return this.softwareList.reduce((max, s) => Math.max(max, s.code), 0) + 1;
  }

  public isSoftwareValid(soft: Software): boolean {
    return soft.code >= 0 &&
           !!soft.name &&
           !!soft.version &&
           soft.licenses >= 0 &&
           !this.softwareList.some(s => 
             s.name === soft.name && 
             s.version === soft.version);
  }

  editSoftware(index: number) {
    this.editingIndex = index;
    this.editingSoftware = { ...this.softwareList[index] };
  }

  saveSoftware() {
    if (this.editingIndex !== null && this.editingSoftware && this.isSoftwareValid(this.editingSoftware)) {
      this.softwareList[this.editingIndex] = this.editingSoftware;
      this.cancelEdit();
    }
  }

  deleteSoftware(code: number) {
    this.softwareList = this.softwareList.filter(s => s.code !== code);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingSoftware = null;
  }

  resetNewSoftware() {
    this.newSoftware = {
      code: 0,
      name: '',
      version: '',
      licenses: 0,
      purchaseDate: new Date(),
      developerCode: 0,
      typeCode: 0
    };
  }
  
}