import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormeditComponent } from './formedit/formedit.component';

export const routes: Routes = [
    {path:'crud-table',component:CrudComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'new',component:FormComponent},
    {path:':id/edit',component:FormComponent}
];
