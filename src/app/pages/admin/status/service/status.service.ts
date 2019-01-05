import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_STATUS_URI } from '../../../../app.constants';
import { Status } from '../model/Status'

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getStatusList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_STATUS_URI}`);
  }

  deleteStatus(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_STATUS_URI}/${id}`);
  }
  getStatus(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_STATUS_URI}/${id}`);
  }
  updateStatus(id, status: Status) {
    console.log('trying to update status in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_STATUS_URI}/${id}`, status);
  }
  createStatus(status) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_STATUS_URI}`, status);
  }
}




