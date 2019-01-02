import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../customer/model/customer';
import {Organization} from '../organization/model/organization';
import {Product} from '../product/model/product';
import {User} from './model/User';
import { CustomerService } from '../customer/service/customer.service';
import {OrganizationService} from '../organization/service/organization.service';
import {ProductService} from '../product/service/product.service'
import { Router } from '@angular/router';
import { UserService } from './service/user.service';
 

@Component({
  selector: 'CreateUser',
  templateUrl: './createUser.component.html',
  styleUrls: ['./user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User;
  customers: Customer[];
  customer: Customer;
  organizations: Organization[];
  products: Product[];
  organization: Organization;



  constructor(private http: HttpClient, private customerService: CustomerService,
              private organizationService: OrganizationService, private productService: ProductService,
              private userService: UserService, private router: Router) {
    console.log(' CreateUserComponent constructor');
    // 
    this.organizationService.getOrganizationList().subscribe(
      response => {
        console.log('organizations list');
        console.log(response);
        this.organizations = response;
        //this.router.navigate(['/pages/organization']);
      },
      error => {
        console.log("retrieving organization list unsuccesful");
      }
    );

    this.customerService.getCustomersList().subscribe(
      response => {
        console.log('customers list');
        console.log(response);
        this.customers = response;
        //this.router.navigate(['/pages/organization']);
        //this.customer = new Customer(-1,'','','',true,this.organization,this.products);
      },
      error => {
        console.log("retrieving products list unsuccesful");
      }
    );
    this.organization = new Organization(null, '', '', '', true);
    this.customer = new Customer(null,'','','',true,this.organization,null);
    this.user = new User(null,'','','',this.organization,this.customer,'',true);
    


    
   }

  ngOnInit() {
    console.log('createUser ngOnInit');
  }

  saveUser(user) {
    console.log('saving user');
    console.log(user);

    console.log('organization on the user is');
    console.log(user.organizaiton);
    if(user.organization.id)
    {
      console.log('user belongs to organization');
    }
    else
    {
      console.log('user organization does not exist');
      delete user['organization'];
      console.log(user);
    }
    console.log('user belongs to customer ');
    if(user.customer.id)
    {
      console.log('user customer exists');
    }
    else
    {
      console.log('user does belong to customer');
      delete user['customer'];
      console.log(user);
    }

    this.userService.createUser(user).subscribe(
      response => {
        console.log("user creation successful");
        this.router.navigate(['/pages/user']);
      },
      error => {
        console.log("customer user unsuccesful");
      }
    );

  //   console.log(this.selectedProducts);
  //   this.products.length=0;
  //   for (let entry of this.selectedProducts) {
  //     console.log(`entry value is ${entry}`)
    
  //    this.products.push(new Product(entry,'','',customer.organization,true));

  // }
  // console.log(this.products);

  //   console.log('customer before modification');
  //   console.log(customer);
  //   customer.setProducts(this.products);
  //   console.log('customer after modification');
  //   console.log(customer);
  //   this.customerService.createCustomer(customer).subscribe(
  //     response => {
  //       console.log("customer creation successful");
  //      // this.router.navigate(['/pages/customer']);
  //     },
  //     error => {
  //       console.log("customer creation unsuccesful");
  //     }
  //   );
  }

  cancel()
  {
    this.router.navigate(['/pages/user']);
  }

  
}
