import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddmonService {

  constructor(private http: HttpClient) { }

  reservation = {
    tenmon: '',
    gia: '',
    loai: '',
    desc: ''
  }
  users(){
    return this.http.get('http://localhost:3000/fetch/1')
  }
  saveUser(data: any){
    return this.http.post('http://localhost:3000/reservation',data)
  }
}
