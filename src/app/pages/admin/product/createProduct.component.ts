import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';
import { Organization } from '../organization/model/organization';
import { OrganizationService } from '../organization/service/organization.service';


@Component({
  selector: 'createProduct',
  templateUrl: './createProduct.component.html',
  styleUrls: ['./product.component.scss']
})
export class createProductComponent implements OnInit {

  product: Product;
  organization1 = new Organization(1, 'firstname', '', '', true);
  organization2 = new Organization(2, 'secondname', '', '', true);
  organization3 = new Organization(3, 'thirdname', '', '', true);
  organization4 = new Organization(4, 'fourthname', '', '', true);
  // organizations: Organization[] = [this.organization1, this.organization2, this.organization3, this.organization4];
  organizations: Organization[] = [this.organization1, this.organization2, this.organization3, this.organization4];
  selectValues: String[];
  organization: Organization;


  constructor(private http: HttpClient, private productService: ProductService,
    private organizationService: OrganizationService, private router: Router) {
    console.log(' createProduct constructor');
    this.organization = new Organization(null, '', '', '', true);
    this.product = new Product(-1, '', '', this.organization, true);
    // // to use for search criteria
    this.organizationService.getOrganizationList().subscribe(
      response => {
        this.organizations = response;
        for (let organization of this.organizations) {
          // console.log(`${organization.id}`); 
          // console.log(`${organization.name}`); 
          // console.log(`${organization.location}`); 
          // console.log(`${organization.email}`);
          // console.log(`${organization.active}`);  // 1, "string", false
          // console.log(this.organizations);

        }
      });


    this.selectValues = ['ravi', 'krishna'];



  }

  ngOnInit() {
    console.log('CreateProductComponent ngOnInit');

  }

  saveProduct(product) {
    console.log('saving organization');
    this.productService.createProduct(product).subscribe(
      response => {
        console.log("product creation succesful");
        this.router.navigate(['/pages/product']);
      },
      error => {
        console.log("product creation unsuccesful");
      }
    );
  }

  cancel() {
    this.router.navigate(['/pages/product']);
  }


}
