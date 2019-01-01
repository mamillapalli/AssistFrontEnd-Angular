import { Organization } from "../../organization/model/organization";

export class Product {
    constructor(public id: number, public name: string, public description: String, public organization: Organization, public active: boolean) {}
  }