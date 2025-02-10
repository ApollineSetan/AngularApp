import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exercice1Component } from './exercice1/exercice1.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'exercice1',component: Exercice1Component},
];
