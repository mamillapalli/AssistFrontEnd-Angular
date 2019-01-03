import {Role} from '../../role/model/Role';
import {User} from '../../user/model/User';
import {Customer} from '../../customer/model/customer';
import {Product} from '../../product/model/Product';
export class UserRole {
    
    private id: number;
    private role: Role;
    private user: User;
    private customer: Customer;
    private product: Product;

    
    constructor( id: number,  role: Role,  user: User,
                 customer: Customer, product: Product) {
                  this.id = id;
                  this.role = role;
                  this.user = user;
                  this.customer = customer;
                  this.product = product;
      }

      public getRole()
      {
          return this.role;
      }
      public getUser()
      {
          return this.user;
      }
      public getCustomer()
      {
          return this.customer;
      }
      public getProduct()
      {
          return this.product;
      }
      public setRole(role: Role)
      {
          this.role = role;
      }
      public setUser(user: User)
      {
          this.user = user;
      }
      public setCustomer(customer: Customer)
      {
          this.customer = customer;
      }
      public setProduct(product: Product)
      {
          this.product = product;
      }


  }