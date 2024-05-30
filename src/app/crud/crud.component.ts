import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../api/student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

    private studentService = inject(StudentService);
    students:any=[];
    ngOnInit(): void {
        this.studentService.list().subscribe(
          (students:any)=>{this.students=students}
        );
    }
}
