import { AddmonService } from './../../services/addmon.service';
import { AddmonComponent } from './../addmon/addmon.component';
import{Component, OnInit} from '@angular/core';

@Component({
  selector:'app-listing',
  templateUrl:'./listing.component.html',
  styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit{
  constructor(private add: AddmonService) {}
   ngOnInit(): void {
   }
}
