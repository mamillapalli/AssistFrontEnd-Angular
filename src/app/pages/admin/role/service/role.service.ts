import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI } from '../../../../app.constants';
import { Role } from '../model/Role'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoleList() {
    return this.http.get<any[]>(`${BACK_END_URI}/roles`);
  }

  deleteRole(id) {
    return this.http.delete(`${BACK_END_URI}/roles/${id}`);
  }
  getRole(id) {
    return this.http.get<any>(`${BACK_END_URI}/roles/${id}`);
  }
  updateRole(id, role: Role) {
    console.log('trying to update role in service method');
    return this.http.put<any>(`${BACK_END_URI}/roles/${id}`, role);
  }
  createRole(role) {
    return this.http.post<any>(`${BACK_END_URI}/roles`, role);
  }
}




