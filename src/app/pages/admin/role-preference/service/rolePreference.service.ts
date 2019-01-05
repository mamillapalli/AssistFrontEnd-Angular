import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_ROLEPREFERENCES_URI } from '../../../../app.constants';
import { RolePreference } from '../model/RolePreference'

@Injectable({
  providedIn: 'root'
})
export class RolePreferenceService {

  constructor(private http: HttpClient) { }

  getRolePreferenceList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_ROLEPREFERENCES_URI}`);
  }

  deleteRolePreference(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_ROLEPREFERENCES_URI}/${id}`);
  }
  getRolePreference(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_ROLEPREFERENCES_URI}/${id}`);
  }
  updateRolePreference(id, rolePreference: RolePreference) {
    console.log('trying to update rolePreference in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_ROLEPREFERENCES_URI}/${id}`, rolePreference);
  }
  createRolePreference(rolePreference) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_ROLEPREFERENCES_URI}`, rolePreference);
  }
}




