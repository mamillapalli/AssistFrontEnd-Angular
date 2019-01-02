import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './model/customer';
import {Organization} from '../organization/model/organization';
import {Product} from '../product/model/product';
import { CustomerService } from './service/customer.service';
import {OrganizationService} from '../organization/service/organization.service';
import {ProductService} from '../product/service/product.service'
import { Router } from '@angular/router';
 

@Component({
  selector: 'createCustomer',
  templateUrl: './createCustomer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer;
  organizations: Organization[];
  products: Product[];
  organization: Organization;
  product: Product;
  selectedProducts: number[];


  constructor(private http: HttpClient, private customerService: CustomerService,
              private organizationService: OrganizationService, private productService: ProductService,
              private router: Router) {
    console.log(' createCustomer constructor');
    // 
    this.organizationService.getOrganizationList().subscribe(
      response => {
        console.log(`{{response}}`);
        this.organizations = response;
        //this.router.navigate(['/pages/organization']);
      },
      error => {
        console.log("retrieving organization list unsuccesful");
      }
    );

    this.productService.getPrductsList().subscribe(
      response => {
        console.log(`{{response}}`);
        this.products = response;
        //this.router.navigate(['/pages/organization']);
        //this.customer = new Customer(-1,'','','',true,this.organization,this.products);
      },
      error => {
        console.log("retrieving products list unsuccesful");
      }
    );
    this.organization = new Organization(null, '', '', '', true);
    this.product = new Product(-1, '', '', this.organization, true);
   // this.products = [this.product];
    this.customer = new Customer(-1,'','','',true,this.organization,this.products);

    
   }

  ngOnInit() {
    console.log('createOrganization ngOnInit');
  }

  saveCustomer(customer) {
    console.log('saving customer');
    console.log(this.selectedProducts);
    this.products.length=0;
    for (let entry of this.selectedProducts) {
      console.log(`entry value is ${entry}`)
    
     this.products.push(new Product(entry,'','',customer.organization,true));

  }
  console.log(this.products);

    console.log('customer before modification');
    console.log(customer);
    customer.setProducts(this.products);
    console.log('customer after modification');
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      response => {
        console.log("customer creation successful");
       // this.router.navigate(['/pages/customer']);
      },
      error => {
        console.log("customer creation unsuccesful");
      }
    );
  }

  cancel()
  {
    this.router.navigate(['/pages/customer']);
  }

  
}
