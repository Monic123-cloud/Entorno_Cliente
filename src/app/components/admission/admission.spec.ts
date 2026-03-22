import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionComponent } from './admission';
import { FormsModule } from '@angular/forms'; 

describe('AdmissionComponent', () => {
  let component: AdmissionComponent;
  let fixture: ComponentFixture<AdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Usamos el nombre completo: AdmissionComponent
      // Importo FormsModule porque tu HTML usa ngModel
      imports: [AdmissionComponent, FormsModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Esto lanza la detección de cambios inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
