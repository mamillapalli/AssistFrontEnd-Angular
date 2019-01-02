import {Role} from '../../role/model/Role';
export class RolePreference {
    
    private id: number;
    private role: Role;
    private byIssue: boolean;
    private endOfDay: boolean;
    private weekly: boolean;
    private monthly: boolean;
    
    constructor( id: number,  role: Role,  byIssue: boolean, 
                endOfDay: boolean, weekly: boolean, monthly: boolean) {
                  this.id = id;
                  this.role = role;
                  this.byIssue = byIssue;
                  this.endOfDay = endOfDay;
                  this.weekly = weekly;
                  this.monthly = monthly;  
      }
      public getRole()
      {
          return this.role;
      }
      public setRole(role: Role)
      {
        this.role = role;
      }
  }