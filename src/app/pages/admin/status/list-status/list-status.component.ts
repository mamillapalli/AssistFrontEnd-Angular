import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { StatusService } from '../service/status.service';
import { Status } from '../model/Status';

import { Router } from '@angular/router';

@Component({
  selector: 'list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {

  source: ServerDataSource;
  status: Status;
  loadingTable = true;

  settings = {
    noDataMessage : 'No data found',
    actions:
    {
      delete : false,
      add: false,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },  
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      name: {
        title: 'Name',
        filter: false,
      },
      description: {
        title: 'Description',
        filter: false,
      }

    }
  };

  constructor(private http: HttpClient,
    private statusService: StatusService,
    private router: Router) {
   console.log('constructor');
  
   this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/status' });
   this.source.onChanged().subscribe(
    response => {
      console.log("userRole creation succesful");
      this.loadingTable = false;
    },
    error => {
      console.log(" userRole unsuccesful");
    }
   );
    }

  ngOnInit() {
  }


  onCreateConfirm(event) {
    console.log("on create confirm button in smart table");
    if (window.confirm('Are you sure you want to create?')) {
      console.log(`${event.newData['id']}`);
      console.log(`trying to update the status with id ${event.newData['id']}`)
      this.status = new Status(event.newData['id'],event.newData['name'],
      event.newData['description']);
      this.statusService.createStatus(this.status).subscribe(
        response => {
          console.log("status update succesful");
        }
      );
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  createStatus() {
    console.log(`on click of create status button`);
    this.router.navigate(['/pages/createStatus']);
  }

}
