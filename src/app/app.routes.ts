import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CompartilharEventoComponent } from './components/pages/compartilhar-evento/compartilhar-evento.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'compartilharEvento', component: CompartilharEventoComponent},
    {path: 'sobre', component: SobreComponent}
];
