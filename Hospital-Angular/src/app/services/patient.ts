import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs'; 

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Se guarda la lista de pacientes (los 10 de la API + los nuevos)
  private pacientesSubject = new BehaviorSubject<any[]>([]);
  public pacientes$ = this.pacientesSubject.asObservable(); // 👈 El "$" indica que es un Observable

  constructor(private http: HttpClient) { 
    // Al arrancar, carga los datos de la API una sola vez
    this.cargarDatosIniciales();
  }

  //Método para cargar los datos de la API al BehaviorSubject
  private cargarDatosIniciales() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        const datosFormateados = data.map(p => ({
          ...p,
     
          city: p.address?.city, 
          
          insurance: p.company?.name || 'Particular'
        }));
        this.pacientesSubject.next(datosFormateados);
      },
      error: (err) => console.error(err)
    });
  }

  // Método para añadir un paciente nuevo a la lista actual
  addPacienteLocal(nuevoPaciente: any) {
    // Obtiene la lista actual
    const listaActual = this.pacientesSubject.value;
    
    // Calcula un ID nuevo (el más alto actual + 1)
    const nuevoId = listaActual.length > 0 
      ? Math.max(...listaActual.map(p => p.id)) + 1 
      : 1;

    // Crea el objeto final con el ID y un email por defecto
    const pacienteFinal = { 
      id: nuevoId, 
      ...nuevoPaciente,
    };

    // Añade el nuevo paciente al final de la lista
    const nuevaLista = [...listaActual, pacienteFinal];

    // Avisa a todos los componentes de que la lista ha cambiado
    this.pacientesSubject.next(nuevaLista);
  }
}