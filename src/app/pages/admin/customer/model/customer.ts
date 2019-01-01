import { Organization } from "../../organization/model/organization";
import { Product } from "../../product/model/product";

export class customer {
    constructor(public id: number, public name: string, public location: String, public email: String, public active: boolean,
      public organization: Organization, public product: Product[]) {}
  }