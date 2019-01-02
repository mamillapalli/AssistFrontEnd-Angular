import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStatusComponent } from './list-status/list-status.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JwtAuthServiceService} from '../../../@core/interceptor/jwt-auth-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [ListStatusComponent],
  imports: [
    ThemeModule,
    CommonModule,
    Ng2SmartTableModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class StatusModule { }
