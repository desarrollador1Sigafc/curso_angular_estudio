import { Routes } from '@angular/router';
import { guardaRoutaGuard } from './core/guards/guarda-routa.guard';
/* s */
import { HomeComponent } from './feactures/home/home.component';
import { PetListComponent } from './feactures/pets/components/list_pets/pet-list.component';

export const routes: Routes = [
    //esto es el lazy loading y como manejar los guardas
    { 
        path: 'home' ,
        component: HomeComponent

        //loadComponent: () => import('./feactures/home/home.component').then(m => m.HomeComponent),
       // canActivate:[guardaRoutaGuard]
     }, 
     
    {
        path: 'pets',
        component :PetListComponent
        //loadComponent: () => import('./feactures/pets/components/list_pets/pet-list.component').then(m => m.PetListComponent)
    },
    
    
    {
        path: 'pets/:id',
        component :PetListComponent
        //loadComponent: () => import('./feactures/pets/components/list_pets/pet-list.component').then(m => m.PetListComponent)
    },


    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
