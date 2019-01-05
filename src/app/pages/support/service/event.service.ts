import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACK_END_URI } from '../../../app.constants';
import { Event } from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventList(id) {
    return this.http.get<any[]>(`${BACK_END_URI}/events/${id}`);
  }

  deleteEvent(id) {
    return this.http.delete(`${BACK_END_URI}/events/${id}`);
  }
  getEvent(issueId,eventId) {
    return this.http.get<any>(`${BACK_END_URI}/events/${issueId}${eventId}`);
  }
  updateEvent(id, event: Event) {
    console.log('trying to update event in service method');
    return this.http.put<any>(`${BACK_END_URI}/events/${id}`, event);
  }
  createEvent(event) {
    return this.http.post<any>(`${BACK_END_URI}/events`, event);
  }
}




