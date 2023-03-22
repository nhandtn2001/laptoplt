import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddmonService } from 'src/app/services/addmon.service';
@Component({
  selector: 'app-addmon',
  templateUrl: './addmon.component.html',
  styleUrls: ['./addmon.component.css']
})
export class AddmonComponent {
  users:any;
  reservation = {
    tenmon: '',
    gia: '',
    loai: '',
    desc: ''
  }
    constructor(private userData: AddmonService){
      this.userData.users().subscribe((data)=>{
        this.users = data;
      })
    }
    getUserFormData(data:any){
      console.warn(data)
      this.userData.saveUser(data).subscribe((result)=>{
        console.warn(result);
      })
    }
}
