import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Role} from '../model/Role';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'createRole',
  templateUrl: './createRole.component.html', 
  styleUrls: ['../list-role/list-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  role: Role;


  constructor(private http: HttpClient, private roleService: RoleService,
              private router: Router) {
    console.log(' createRole constructor');
    this.role = new Role(null,'','',true);

    
   }

  ngOnInit() {
    console.log('createRole ngOnInit');
  }

  saveRole(role) {
    console.log('saving role');
    this.roleService.createRole(role).subscribe(
      response => {
        console.log("role creation succesful");
        this.router.navigate(['/pages/Role']);
      },
      error => {
        console.log("role creation unsuccesful");
      }
    );
  }

  cancel()
  {
    this.router.navigate(['/pages/Role']);
  }

  
}
