import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SoftwareComponent } from './software.component';

describe('SoftwareComponent', () => {
  let component: SoftwareComponent;
  let fixture: ComponentFixture<SoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add new software', () => {
    component.newSoftware = {
      code: 1,
      name: 'Test Software',
      version: '1.0',
      licenses: 10,
      purchaseDate: new Date(),
      developerCode: 1,
      typeCode: 1
    };
    component.addSoftware();
    expect(component.softwareList.length).toBe(1);
  });
});