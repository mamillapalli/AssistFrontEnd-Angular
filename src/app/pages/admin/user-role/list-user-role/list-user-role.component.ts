import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { UserRoleService } from '../service/userRole.service';
import { Router } from '@angular/router';
import {CustomerNameRenderComponent} from './CustomerNameRender.component';
import {UserNameRenderComponent} from './UserNameRender.component';
import {ProductNameRenderComponent} from './ProductNameRender.component';
import {RoleNameRenderComponent} from './RoleNameRender.component';

@Component({
  selector: 'list-user-role',
  templateUrl: './list-user-role.component.html',
  styleUrls: ['./list-user-role.component.scss']
})
export class ListUserRoleComponent implements OnInit {

  source: ServerDataSource;
  loadingTable: any;
  // ravi: number;
  

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
      user: {
        title: 'User Name',
        filter: false,
        type: 'custom',
        renderComponent: UserNameRenderComponent,
      },
      cutomer: {
        title: 'Customer Name',
        filter: false,
        type: 'custom',
        renderComponent: CustomerNameRenderComponent,
      },
      product: {
        title: 'Product Name',
        filter: false,
        type: 'custom',
        renderComponent: ProductNameRenderComponent,
      },
      role: {
        title: 'Role Name',
        filter: false,
        type: 'custom',
        renderComponent: RoleNameRenderComponent,
      }

    }
  };

  constructor(private http: HttpClient,
    private userRoleService: UserRoleService,
    private router: Router) {
   console.log('constructor');
   this.loadingTable = true;
   this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/userRoles' });
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
  createUserRole() {

    console.log(`on click of create userRole button`);
    this.router.navigate(['/pages/CreateUserRole']);
  
  }

}
