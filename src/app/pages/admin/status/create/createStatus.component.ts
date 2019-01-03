import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Status} from '../model/Status';
import { StatusService } from '../service/status.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'createStatus',
  templateUrl: './createStatus.component.html',
  styleUrls: ['../list-status/list-status.component.scss']
})
export class CreateStatusComponent implements OnInit {

  status: Status;
  


  constructor(private http: HttpClient, private statusService: StatusService,
              private router: Router) {
    console.log(' createStatus constructor');
    this.status = new Status(null,'','');

    
   }

  ngOnInit() {
    console.log('createStatus ngOnInit');
  }

  saveStatus(status) {
    console.log('saving status');
    this.statusService.createStatus(status).subscribe(
      response => {
        console.log("status creation succesful");
        this.router.navigate(['/pages/status']);
      },
      error => {
        console.log("status creation unsuccesful");
      }
    );
  }

  cancel()
  {
    this.router.navigate(['/pages/status']);
  }

  
}
