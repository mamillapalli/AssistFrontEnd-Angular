import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_ISSUES_URI } from '../../../app.constants';
import { Issue } from '../model/Issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  getIssueList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_ISSUES_URI}`);
  }

  deleteIssue(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_ISSUES_URI}/${id}`);
  }
  getIssue(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_ISSUES_URI}/${id}`);
  }
  updateIssue(id, issue: Issue) {
    console.log('trying to update issue in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_ISSUES_URI}/${id}`, issue);
  }
  createIssue(issue) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_ISSUES_URI}`, issue);
  }
}




