import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { RolePreferenceService } from '../service/rolePreference.service';
import { RoleNameRenderComponent } from './RoleNameRender.component';
import { Router } from '@angular/router';

@Component({
  selector: 'list-role-preference',
  templateUrl: './list-role-preference.component.html',
  styleUrls: ['./list-role-preference.component.scss']
})
export class ListRolePreferenceComponent implements OnInit {
  source: ServerDataSource;
  loadingTable = true;

  settings = {
    noDataMessage : 'No data found',
    actions:
    {
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
      role: {
        title: 'Role Name',
        filter: false,
        type: 'custom',
        renderComponent: RoleNameRenderComponent,
      },
      byIssue: {
        title: 'On Each Issue',
        filter: false,
      },
      endOfDay: {
        title: 'End Of Day',
        filter: false,
      },
      weekly: {
        title: 'End Of Week',
        filter: false,
      },
      monthly: {
        title: 'End Of Month',
        filter: false,
      },

    }
  };
  constructor(private http: HttpClient,
    private rolePreferenceService: RolePreferenceService,
    private router: Router) {
   console.log('constructor');
  
   this.source = new ServerDataSource(http, { endPoint: 'http://localhost:8080/rolePreferences' });
   this.source.onChanged().subscribe(
    response => {
      console.log("userRole creation succesful");
      this.loadingTable = false;
    },
    error => {
      console.log(" userRole unsuccesful");
    }
   );
    }

  ngOnInit() {
  }
  createRolePreference() {

    console.log('redirecting to create role preference page');
    this.router.navigate(['/pages/CreateRolePreference']);
  }

}
