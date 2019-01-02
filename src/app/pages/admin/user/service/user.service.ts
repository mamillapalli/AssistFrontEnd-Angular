import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI } from '../../../../app.constants';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get<any[]>(`${BACK_END_URI}/users`);
  }

  deleteUser(id) {
    return this.http.delete(`${BACK_END_URI}/users/${id}`);
  }
  getUser(id) {
    return this.http.get<any>(`${BACK_END_URI}/users/${id}`);
  }
  updateUser(id, user: User) {
    console.log('trying to update user in service method');
    return this.http.put<any>(`${BACK_END_URI}/users/${id}`, user);
  }
  createUser(user) {
    return this.http.post<any>(`${BACK_END_URI}/users`, user);
  }
}




