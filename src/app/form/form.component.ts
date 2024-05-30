import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { StudentService } from '../api/student.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private fb= inject(FormBuilder);
  private studentService = inject(StudentService);
  private router =inject(Router);
  form=this.fb.group({
    fullName:[''],
    email:[''],
    phoneNumber:[''],
    address:[''],
    career:[''],
    groupClass:[''],
    year:['']
  });


  create(){
      const student= this.form.value;
      this.studentService.create(student)
      .subscribe(()=>{
          this.router.navigate(['/crud-table']);
      });
  }
}
