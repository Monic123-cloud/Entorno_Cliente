import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ListComponent } from './components/list/list';
import { AdmissionComponent } from './components/admission/admission';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'admission', component: AdmissionComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Si la URL está vacía, nos lleva a home
];

