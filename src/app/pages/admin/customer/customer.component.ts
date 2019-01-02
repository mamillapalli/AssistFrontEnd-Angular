import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import {OrganizationRenderComponent} from './../customer/OrganizationRenderComponent';
import {ProductsRenderComponent} from './../customer/ProductsRenderComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

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
      location: {
        title: 'Location',
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
      products: {
        title: 'Products List',
        filter: false,
        type: 'custom',
        renderComponent: ProductsRenderComponent,
      },
      active: {
        title: 'Status',
        filter: false,
      }

    }
  };

  constructor(private http: HttpClient,  private router: Router) {
    console.log('constructor');
   
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/customers' });
    console.log(this.source);
  }

  ngOnInit() {
  }


  createCustomer()
  {
    console.log(`on click of create product button`);
    this.router.navigate(['/pages/createCustomer']);
  }

}
