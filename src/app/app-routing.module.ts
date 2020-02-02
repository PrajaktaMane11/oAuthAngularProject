// tslint:disable-next-line: import-spacing
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'confirmation-page', component: ConfirmationPageComponent },
    {path: '**', component: PageNotFoundComponent}

];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule{ }
