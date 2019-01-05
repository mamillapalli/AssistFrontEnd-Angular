import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  source: ServerDataSource;
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
      },
      active: {
        title: 'Active',
        filter: false,
      }

    }
  };
  constructor(private http: HttpClient,
    private roleService: RoleService,
    private router: Router) {
   console.log('constructor');
  
   this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/roles' });
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

  createRole() {

    console.log(`on click of create role button`);
    this.router.navigate(['/pages/createRole']);
  
  }



}
