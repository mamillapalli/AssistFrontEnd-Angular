import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Organization} from './model/organization';
import { OrganizationService } from './service/organization.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'createOrganization',
  templateUrl: './createOrganization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {

  organization: Organization;


  constructor(private http: HttpClient, private organizationService: OrganizationService,
              private router: Router) {
    console.log(' createOrganization constructor');
    this.organization = new Organization( -1, '', '','',true);

    
   }

  ngOnInit() {
    console.log('createOrganization ngOnInit');
  }

  saveOrganization(organization) {
    console.log('saving organization');
    this.organizationService.createOrganization(organization).subscribe(
      response => {
        console.log("organization creation succesful");
        this.router.navigate(['/pages/organization']);
      },
      error => {
        console.log("organization creation unsuccesful");
      }
    );
  }

  cancel()
  {
    this.router.navigate(['/pages/organization']);
  }



  
}
