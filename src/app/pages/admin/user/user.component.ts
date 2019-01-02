import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import {OrganizationRenderComponent} from './../user/OrganizationRenderComponent';
import {CustomerRenderComponent} from './../user/CustomerRenderComponent';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
      firstname: {
        title: 'Firstname',
        filter: false,
      },
      lastname: {
        title: 'Lastname',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
      organizaiton: {
        title: 'Organization Name',
        filter: false,
        type: 'custom',
        renderComponent: OrganizationRenderComponent,
      },
      customer: {
        title: 'Customer Name',
        filter: false,
        type: 'custom',
        renderComponent: CustomerRenderComponent,
      },

      active: {
        title: 'Status',
        filter: false,
      }

    }
  };
  constructor(private http: HttpClient,  private router: Router) { 

    console.log(`in user component`);
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/users' });
    console.log(this.source);
  }

  ngOnInit() {
  }

  createUser()
  {
      console.log(`on click of create user button`);
      this.router.navigate(['/pages/createUser']);
  }

}
