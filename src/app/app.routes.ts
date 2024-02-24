import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BuscadorPeliculasComponent } from './pages/proyects/buscador-peliculas/buscador-peliculas.component';
import { CalculadoraComponent } from './pages/proyects/calculadora/calculadora.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyects', component: ProyectsComponent},
    {path: 'proyects/buscador-peliculas', component: BuscadorPeliculasComponent},
    {path: 'proyects/calculadora', component: CalculadoraComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
];
