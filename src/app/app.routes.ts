import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'exercice1',component: Exercice1Component},
    {path: 'exercice2',component: Exercice2Component},
    {path: 'exercice3',component: Exercice3Component},
    {path: 'exercice4',component: Exercice4Component},
];
