import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { StatusService } from '../service/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {

  source: ServerDataSource;

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
    }

  ngOnInit() {
  }

}
