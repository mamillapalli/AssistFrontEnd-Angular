import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewIssueComponent } from './view-issue/view-issue.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [ViewIssueComponent, AddEventComponent],
  imports: [
    CommonModule
  ]
})
export class ViewIssueModule { }
