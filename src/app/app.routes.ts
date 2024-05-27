import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'crud-table',component:CrudComponent},
    {path:'home',component:HomeComponent}
];
