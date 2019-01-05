import { User } from "../../admin/user/model/User";
import { Status } from "../../admin/status/model/Status";
import { Product } from "../../admin/product/model/product";
import { Customer } from "../../admin/customer/model/customer";

export class Issue {
    
    private id: number;
    private name: String;
    private description: String;
    private type: String;
    private createTime: Date; 
    private targetTime: Date;
    private priority: String; 
    private status: Status;
    private createdUser: User;
    private customer: Customer;
    private product: Product;
    private assignedTo: User;
    private assignedBy: User;
    
    

    constructor( id: number,  name: String,  description: String, 
                  type: String, createTime: Date, targetTime: Date,
                  priority: String, status: Status, createdUser: User,
                  customer: Customer, product: Product, assignedTo: User,
                  assignedBy: User) {
          this.id =id;
          this.name = name;
          this.description = description;
          this.type = type;
          this.createTime = createTime;
          this.targetTime = targetTime;
          this.priority = priority;          
          this.status = status;
          this.createdUser = createdUser;
          this.customer = customer;
          this.product = product;
          this.assignedTo = assignedTo;
          this.assignedBy = assignedBy;
      }

      public getCreatedUser()
      {
          return this.createdUser;
      }

      public setCreatedUser(createdUser: User)
      {
          this.createdUser = createdUser;
      }

      public getCustomer()
      {
          return this.customer;
      }

      public setCustomer(customer: Customer)
      {
          this.customer = customer;
      }

      public getProduct()
      {
          return this.product;
      }

      public setProduct(product: Product)
      {
          this.product = product;
      }

      public getStatus()
      {
          return this.status;
      }

      public setStatus(status: Status)
      {
          this.status = status;
      }


      public getAssignedTo()
      {
          return this.assignedTo;
      }

      public setAssignedTo(assignedTo: User)
      {
          this.assignedTo = assignedTo;
      }

      
      public getAssignedBy()
      {
          return this.assignedBy;
      }

      public setAssignedBy(assignedBy: User)
      {
          this.assignedBy = assignedBy;
      }

  }