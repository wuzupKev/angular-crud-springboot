import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../api/student.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
 
  private fb= inject(FormBuilder);
  private studentService = inject(StudentService);
  private router =inject(Router);
  private route =inject(ActivatedRoute);

  ngOnInit(): void {
    const id=  this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id){
      this.studentService.get(parseInt(id)).subscribe(student=>{console.log(student)});
    }
 }







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
