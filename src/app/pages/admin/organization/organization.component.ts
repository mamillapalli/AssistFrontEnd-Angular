import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import {Organization} from './model/organization';
import { HttpClient } from '@angular/common/http';
import { OrganizationService } from './service/organization.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  source: ServerDataSource;
  organizaiton: Organization;
  organizations : Organization[];
  
  settings = {
    // delete: {
    //   confirmDelete: true,
    //   deleteButtonContent: '-',
    // },
    // hideHeader : true,
    // hideSubHeader : true,
    noDataMessage : 'No data found',
    actions:
    {
      // columnTitle : 'actions test'; 
      delete : false,
      add: false,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },  
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      name: {
        title: 'Organization Name',
        filter: false,
      },
      location: {
        title: 'Organization Location',
        filter: false,
      },
      email: {
        title: 'Organization Email',
        filter: false,

      },
      active: {
        title: 'Organization Status',
        filter: false,
      }

    }
  };



  constructor(private http: HttpClient,
     private organizationService: OrganizationService,
     private router: Router) {
    console.log('constructor');
   
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/organizations' });
 
    
    // to use for search criteria
    // this.organizationService.getOrganizationList().subscribe(
    //   response => {
    //     this.organizations = response;
    //     for (let organization of this.organizations) {
    //       console.log(`${organization.id}`); 
    //       console.log(`${organization.name}`); 
    //       console.log(`${organization.location}`); 
    //       console.log(`${organization.email}`);
    //       console.log(`${organization.active}`);  // 1, "string", false
    //     }
    //   }
    // );
    
   }

  ngOnInit() {
    console.log('ngOnInit');
  }

  onCreateConfirm(event) {
    console.log("on create confirm button in smart table");
    if (window.confirm('Are you sure you want to create?')) {
      console.log(`${event.newData['id']}`);
      console.log(`trying to update the organization with id ${event.newData['id']}`)
      this.organizaiton = new Organization(event.newData['id'],event.newData['name'],
      event.newData['location'],event.newData['email'],event.newData['active']);
      this.organizationService.createOrganization(this.organizaiton).subscribe(
        response => {
          console.log("organization creation succesful");
        }
      );
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  onDeleteConfirm(event) {
    console.log("on onDeleteConfirm in smart table");
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(`trying to delete the organization with id ${event.Data['id']}`)
      this.organizationService.deleteOrganization(event.Data['id']);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    console.log("on onSaveConfirm in smart table");
    if (window.confirm('Are you sure you want to save?')) {
      console.log(`${event.newData['id']}`);
      console.log(`trying to update the organization with id ${event.newData['id']}`)
      this.organizaiton = new Organization(event.newData['id'],event.newData['name'],
      event.newData['location'],event.newData['email'],event.newData['active']);
      this.organizationService.updateOrganization(this.organizaiton.id,this.organizaiton).subscribe(
        response => {
          //this.messageToUser = 'Todo succesfully deleted';
          // this.refreshTodoList();
          console.log("organization update succesful");
        }
      );
     // event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  createOrganization()
  {
    console.log(`on click of create organizaiton button`);
    this.router.navigate(['/pages/createOrganization']);
  }

}
