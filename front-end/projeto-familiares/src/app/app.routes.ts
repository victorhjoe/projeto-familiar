import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormFamiliarComponent } from './pages/form-familiar/form-familiar.component';
import { PerfilFamiliarComponent } from './pages/perfil-familiar/perfil-familiar.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: FormFamiliarComponent
    },
    {
        path: 'perfil/:id',
        component: PerfilFamiliarComponent
    }
];
