import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class StudentService{
    private http=inject(HttpClient);

    list(){
        return this.http.get('http://localhost:8080/api/student');
    }

    get(id:number){
        return this.http.get('http://localhost:8080/api/student/${id}');
    }

    create(student:any){
        return this.http.post('http://localhost:8080/api/student',student);
    }

    update(id:number,student:any){
        return this.http.put('http://localhost:8080/api/student/${id}',student);
    }
    delete(id:number){
        return this.http.delete('http://localhost:8080/api/student/${id}');
    }



}