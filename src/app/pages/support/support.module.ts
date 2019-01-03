import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import {RegisterIssueModule} from './register-issue/register-issue.module';
import {ViewIssueModule} from './view-issue/view-issue.module'
// import { DashboardModule } from '../dashboard/dashboard.module';
import { PagesRoutingModule } from '../pages-routing.module';

import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';


const ADMIN_COMPONENTS = [
  

];

@NgModule({
  
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    // DashboardModule,
    // MiscellaneousModule,
    RegisterIssueModule,
    ViewIssueModule,
  ],
  declarations: [
  ],
})
export class SupportModule { }


