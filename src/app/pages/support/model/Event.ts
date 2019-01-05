import { User } from "../../admin/user/model/User";
import { Status } from "../../admin/status/model/Status";
import { Issue } from "./Issue";

export class Event {
    
    private id: number;
    private name: String;
    private description: String;
    private issue: Issue; 
    private eventDate: Date; 
    private internal: boolean;
    private createdBy: User;
    private status: Status;

    constructor( id: number,  name: String,  description: String,  issue: Issue,  eventDate: Date,
       internal: boolean,  createdBy: User, status: Status) {
          this.id =id;
          this.name = name;
          this.description = description;
          this.issue = issue;
          this.eventDate = eventDate;
          this.internal = internal;
          this.createdBy = createdBy;
          this.status = status;
      }

      public getIssue()
      {
          return this.issue;
      }

      public setIssue(issue: Issue)
      {
          this.issue = issue;
      }

      public getCreatedBy()
      {
          return this.createdBy;
      }

      public setCretedBy(createdBy: User)
      {
          this.createdBy = createdBy;
      }

      public getStatus()
      {
          return this.status;
      }

      public setStatus(status: Status)
      {
          this.status = status;
      }
      
  }