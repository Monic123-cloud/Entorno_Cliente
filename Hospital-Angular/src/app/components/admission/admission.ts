import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../services/patient'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admission.html',
  styleUrl: './admission.css',
})
export class AdmissionComponent {
  
  nuevoPaciente = {
    name: '', 
    email: '',
    city: '',
    insurance:'',
  };

  //  el servicio y el Router
  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  enviarFormulario() {
    // Validación sencilla: el nombre no puede estar vacío
    if (this.nuevoPaciente.name.trim() === '') {
      alert('Por favor, introduce el nombre completo del paciente.');
      return;
    }
    
    console.log('Ingresando paciente (antes de guardar):', this.nuevoPaciente);

    // Llama al servicio para guardar el paciente de forma local
    this.patientService.addPacienteLocal(this.nuevoPaciente);

    // Muestra el alert y redirige a la tabla para ver el resultado
    alert(`El paciente ${this.nuevoPaciente.name} ha sido ingresado correctamente.`);
    this.router.navigate(['/list']); // Nos lleva automáticamente a la tabla

    // Limpiamos el formulario (aunque al redirigir se limpiará solo)
    this.nuevoPaciente = { name: '', email: '', city: '', insurance: '' };
  }
}