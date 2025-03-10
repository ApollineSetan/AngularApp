import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';
import { Exercice5Component } from './exercice5/exercice5.component';
import { Exercice6Component } from './exercice6/exercice6.component';
import { Exercice7Component } from './exercice7/exercice7.component';
import { Exercice8Component } from './exercice8/exercice8.component';
import { Exercice9Component } from './exercice9/exercice9.component';
import { BlogControlCenterComponentComponent } from './blog-control-center-component/blog-control-center-component.component';
import { APIComponent } from './api/api.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'exercice1',component: Exercice1Component},
    {path: 'exercice2',component: Exercice2Component},
    {path: 'exercice3',component: Exercice3Component},
    {path: 'exercice4',component: Exercice4Component},
    {path: 'exercice5',component: Exercice5Component},
    {path: 'exercice6',component: Exercice6Component},
    {path: 'exercice7',component: Exercice7Component},
    {path: 'exercice8',component: Exercice8Component},
    {path: 'exercice9',component: Exercice9Component},
    {path: 'exercice10',component: BlogControlCenterComponentComponent},
    {path: 'exercice11',component: APIComponent},
];
