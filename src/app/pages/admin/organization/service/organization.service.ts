import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI } from '../../../../app.constants';
import { Organization } from '../model/organization'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getOrganizationList() {
    return this.http.get<any[]>(`${BACK_END_URI}/organizations`);
  }

  deleteOrganization(id) {
    return this.http.delete(`${BACK_END_URI}/organizations/${id}`);
  }
  getOrganization(id) {
    return this.http.get<any>(`${BACK_END_URI}/organizations/${id}`);
  }
  updateOrganization(id, organization: Organization) {
    console.log('trying to update organization in service method');
    return this.http.put<any>(`${BACK_END_URI}/organizations/${id}`, organization);
  }
  createOrganization(id, organization) {
    return this.http.post<any>(`${BACK_END_URI}/organizations`, organization);
  }
}




