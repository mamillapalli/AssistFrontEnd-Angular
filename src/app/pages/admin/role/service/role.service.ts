import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_ROLES_URI } from '../../../../app.constants';
import { Role } from '../model/Role'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoleList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_ROLES_URI}`);
  }

  deleteRole(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_ROLES_URI}/${id}`);
  }
  getRole(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_ROLES_URI}/${id}`);
  }
  updateRole(id, role: Role) {
    console.log('trying to update role in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_ROLES_URI}/${id}`, role);
  }
  createRole(role) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_ROLES_URI}`, role);
  }
}




