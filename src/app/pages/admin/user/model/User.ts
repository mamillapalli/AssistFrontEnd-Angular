import { Organization } from "../../organization/model/organization";
import { Product } from "../../product/model/product";
import {Customer } from '../../customer/model/customer'

export class User {
    
    private id: number;
    private firstname: String;
    private lastname: String;
    private email: String;
    private organization: Organization;
    private customer: Customer;
    private password: String;
    private active: boolean; 
    
    constructor( id: number,  firstname: String,  lastname: String,  email: String,  
       organization: Organization,  customer: Customer, password: String, active :boolean) {
          this.id =id;
          this.firstname = firstname;
          this.lastname = lastname;
          this.email = email;
          this.organization = organization;
          this.customer = customer;
          this.password = password;
          this.active = active;
      }

      public getCustomer()
      {
          return this.customer;
      }

      public setCustomer(customer: Customer)
      {
          this.customer = customer;
      }

      public getOrganization()
      {
          return this.organization;
      }

      public setOrganization(organization: Organization)
      {
          this.organization = organization;
      }

      public getFirstname()
      {
          return this.firstname;
      }

     


      
  }