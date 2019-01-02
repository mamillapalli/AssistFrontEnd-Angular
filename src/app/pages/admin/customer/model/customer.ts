import { Organization } from "../../organization/model/organization";
import { Product } from "../../product/model/product";

export class Customer {
    
    private id: number;
    private name: String;
    private location: String;
    private email: String; 
    private active: boolean; 
    private organization: Organization;
    private products: Product[];

    constructor( id: number,  name: String,  location: String,  email: String,  active: boolean,
       organization: Organization,  products: Product[]) {
          this.id =id;
          this.name = name;
          this.location = location;
          this.email = email;
          this.active = active;
          this.organization = organization;
          this.products = products;
      }

      public getProducts()
      {
          return this.products;
      }

      public setProducts(products: Product[])
      {
          this.products = products;
      }
      
  }