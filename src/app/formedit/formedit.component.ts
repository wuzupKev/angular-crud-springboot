import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../api/student.service';

@Component({
  selector: 'app-formedit',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './formedit.component.html',
  styleUrl: './formedit.component.css'
})
export class FormeditComponent {
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
    year:[''],
    
    placeName:[''],
    placeAddress:[''],
    kindOfWork:[''],
    contact:[''],
    mainOne:['']
  });


  create(){
      const student= this.form.value;
      this.studentService.create(student)
      .subscribe(()=>{
          this.router.navigate(['/crud-table']);
      });
  }
}
