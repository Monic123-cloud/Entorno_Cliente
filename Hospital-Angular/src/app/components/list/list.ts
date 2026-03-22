import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient';
import { DetailComponent } from '../detail/detail';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListComponent implements OnInit {
  pacientes: any[] = [];   
  pacienteSeleccionado: any = null;

  constructor(private patientService: PatientService) { }

ngOnInit(): void {
  // En lugar de llamar a una función, nos suscribimos al flujo de datos
  this.patientService.pacientes$.subscribe(data => {
    this.pacientes = data;
  });
}
  
  seleccionar(p: any) {
    this.pacienteSeleccionado = p;
    console.log("Paciente seleccionado:", p.name);
  }
}
