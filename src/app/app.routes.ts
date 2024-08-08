import { Routes } from '@angular/router';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { MisProyectosComponent } from './pages/mis-proyectos/mis-proyectos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'mis-proyectos', component: MisProyectosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/inicio' }, // Manejo de rutas no encontradas
];
