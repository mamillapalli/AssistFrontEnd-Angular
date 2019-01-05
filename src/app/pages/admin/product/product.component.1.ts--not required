import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';
import { ServerDataSource } from 'ng2-smart-table';
import {Product}  from './model/product'
import { CustomRenderComponent } from './CustomRenderComponent';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  source: ServerDataSource;
  products : Product[];

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
        title: 'Product Name',
        filter: false,
      },
      description: {
        title: 'Product Description',
        filter: false,
      },
      organizaiton: {
        title: 'Organization Name',
        filter: false,
        // valuePrepareFunction: (organizaiton) => {
        //   return organizaiton.id;

        // },
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      active: {
        title: 'Product Status',
        filter: false,
      }

    }
  };

  constructor(private http: HttpClient,
    private productService: ProductService,
    private router: Router) { 
      console.log('constructor');
   
      this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/products' });
      console.log(this.source);


          // to use for search criteria
    // this.productService.getPrductsList().subscribe(
    //   response => {
    //     this.products = response;
    //     for (let product of this.products) {
    //       console.log(product);
    //       console.log(product.organization.name);
    //       // console.log(`${product.id}`); 
    //       // console.log(`${product.name}`); 
    //       // console.log(`${product.description}`); 
    //       // console.log(`${product.organizationId}`);
    //       // console.log(`${product.active}`);  // 1, "string", false
    //     }
    //   }
    // );
    
      
    }

  ngOnInit() { 
    console.log('proudct component ngOnInit');
  }


  onCreateConfirm(event) {
    console.log("on create confirm button in smart table");
    // if (window.confirm('Are you sure you want to create?')) {
    //   console.log(`${event.newData['id']}`);
    //   console.log(`trying to update the organization with id ${event.newData['id']}`)
    //   this.organizaiton = new Organization(event.newData['id'],event.newData['name'],
    //   event.newData['location'],event.newData['email'],event.newData['active']);
    //   this.organizationService.createOrganization(this.organizaiton).subscribe(
    //     response => {
    //       console.log("organization creation succesful");
    //     }
    //   );
    //   event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
  }
  onDeleteConfirm(event) {
    console.log("on onDeleteConfirm in smart table");
    // if (window.confirm('Are you sure you want to delete?')) {
    //   console.log(`trying to delete the organization with id ${event.Data['id']}`)
    //   this.organizationService.deleteOrganization(event.Data['id']);
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  onSaveConfirm(event) {
    console.log("on onSaveConfirm in smart table");
    // if (window.confirm('Are you sure you want to save?')) {
    //   console.log(`${event.newData['id']}`);
    //   console.log(`trying to update the organization with id ${event.newData['id']}`)
    //   this.organizaiton = new Organization(event.newData['id'],event.newData['name'],
    //   event.newData['location'],event.newData['email'],event.newData['active']);
    //   this.organizationService.updateOrganization(this.organizaiton.id,this.organizaiton).subscribe(
    //     response => {
    //       //this.messageToUser = 'Todo succesfully deleted';
    //       // this.refreshTodoList();
    //       console.log("organization update succesful");
    //     }
    //   );
    //  // event.newData['name'] += ' + added in code';
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
  }

  createProduct()
  {
    console.log(`on click of create organizaiton button`);
    this.router.navigate(['/pages/createOrganization']);
  }

}
