import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_USERROLES_URI } from '../../../../app.constants';
import { UserRole } from '../model/UserRole'

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient) { }

  getUserRoleList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_USERROLES_URI}`);
  }

  deleteUserRole(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_USERROLES_URI}/${id}`);
  }
  getUserRole(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_USERROLES_URI}/${id}`);
  }
  updateUserRole(id, userRole: UserRole) {
    console.log('trying to update userRole in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_USERROLES_URI}/${id}`, userRole);
  }
  createUserRole(userRole) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_USERROLES_URI}`, userRole);
  }
}




