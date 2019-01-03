import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RolePreference} from '../model/RolePreference';
import { RolePreferenceService } from '../service/rolePreference.service';
import { Router } from '@angular/router';
import { RoleService } from '../../role/service/role.service';
import { Role } from '../../role/model/Role';
 

@Component({
  selector: 'CreateRolePreference',
  templateUrl: './createRolePreference.component.html',
  styleUrls: ['../list-role-preference/list-role-preference.component.scss']
})
export class CreateRolePreferenceComponent implements OnInit {

  rolePreference: RolePreference;
  roles : Role[];
  role: Role;


  constructor(private http: HttpClient, private rolePreferenceService: RolePreferenceService,
              private router: Router, private roleService: RoleService) {
    console.log(' createrolePreference constructor');
    this.role = new Role(-1,'','',true);
    this.rolePreference = new RolePreference(null, this.role, true, true, true, true);
    this.roleService.getRoleList().subscribe(
      response => {
        console.log(response);
        this.roles=response;
      },
      error => {
        console.log("unable to fetch Roles");
      }
    );

              
    
   }

  ngOnInit() {
    console.log('createrolePreference ngOnInit');
  }

  saveRolePreference(rolePreference) {
    console.log('saving rolePreference');
    console.log(rolePreference);
    this.rolePreferenceService.createRolePreference(rolePreference).subscribe(
      response => {
        console.log("rolePreference creation succesful");
        this.router.navigate(['/pages/RolePreference']);
      },
      error => {
        console.log("rolePreference creation unsuccesful");
      }
    );
  }

  cancel()
  {
    console.log('navigating back to list role preferences page');
    this.router.navigate(['/pages/RolePreference']);
  }

  
}
