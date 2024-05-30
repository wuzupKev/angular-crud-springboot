import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrudComponent,HomeComponent,CommonModule,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-labor-social';

}
