import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRole} from '../model/UserRole';
import {User} from '../../user/model/User';
import {Customer} from '../../customer/model/customer';
import {Product} from '../../product/model/product';
import {Role} from '../../role/model/Role'; 

import { UserRoleService } from '../service/userRole.service';
import { UserService } from '../../user/service/user.service';
import { CustomerService } from '../../customer/service/customer.service';
import { ProductService } from '../../product/service/product.service';
import { RoleService } from '../../role/service/role.service';

import { Router } from '@angular/router';
 

@Component({
  selector: 'createUserRole',
  templateUrl: './createUserRole.component.html',
  styleUrls: ['../list-user-role/list-user-role.component.scss']
})
export class CreateUserRoleComponent implements OnInit {

  userRole: UserRole;
  user: User;
  customer: Customer;
  product: Product;
  role: Role;
  users: User[];
  customers: Customer[];
  products: Product[];
  roles: Role[];


  constructor(private http: HttpClient, private userRoleService: UserRoleService,
              private userService: UserService,private router: Router,
              private customerService: CustomerService, private roleService: RoleService,
              private productService: ProductService) {
    console.log(' createUserRole constructor');
    this.customer = new Customer(-1,'','','',true,null,null);
    this.user = new User(-1,'','','',null,this.customer,'',true);
    this.product = new Product(-1,'','',null,true);
    this.role= new Role(-1,'','',true);
    this.userRole = new UserRole(-1, this.role,this.user,this.customer ,this.product);
    
    this.roleService.getRoleList().subscribe(
      response => {
        console.log(response);
        this.roles=response;
      },
      error => {
        console.log("unable to fetch Roles");
      }
    );
    
    this.customerService.getCustomersList().subscribe(
      response => {
        console.log(response);
        this.customers=response;
      },
      error => {
        console.log("unable to fetch Roles");
      }
    );

    this.productService.getProductsList().subscribe(
      response => {
        console.log(response);
        this.products=response;
      },
      error => {
        console.log("unable to fetch Products");
      }
    );
 

    this.userService.getUsersList().subscribe(
      response => {
        console.log(response);
        this.users=response;
      },
      error => {
        console.log("unable to fetch Users");
      }
    );
 
   }

   

  ngOnInit() {
    console.log('createUserRole ngOnInit');
  }

  saveUserRole(userRole) {
    console.log('saving UserRole');
    this.userRoleService.createUserRole(userRole).subscribe(
      response => {
        console.log("userRole creation succesful");
        this.router.navigate(['/pages/UserRole']);
      },
      error => {
        console.log(" userRole unsuccesful");
      }
    );
  }

  cancel()
  {
    this.router.navigate(['/pages/UserRole']);
  }

  
}
