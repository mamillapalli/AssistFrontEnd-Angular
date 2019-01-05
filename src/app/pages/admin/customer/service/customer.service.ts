import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI, BACK_END_CUSTOMERS_URI } from '../../../../app.constants';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersList() {
    return this.http.get<any[]>(`${BACK_END_URI}${BACK_END_CUSTOMERS_URI}`);
  }

  deleteCustomer(id) {
    return this.http.delete(`${BACK_END_URI}${BACK_END_CUSTOMERS_URI}/${id}`);
  }
  getCustomer(id) {
    return this.http.get<any>(`${BACK_END_URI}${BACK_END_CUSTOMERS_URI}/${id}`);
  }
  updateCustomer(id, customer: Customer) {
    console.log('trying to update customer in service method');
    return this.http.put<any>(`${BACK_END_URI}${BACK_END_CUSTOMERS_URI}/${id}`, customer);
  }
  createCustomer(customer) {
    return this.http.post<any>(`${BACK_END_URI}${BACK_END_CUSTOMERS_URI}`, customer);
  }
}




