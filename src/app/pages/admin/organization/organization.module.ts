import { NgModule } from '@angular/core';


import { ThemeModule } from '../../../@theme/theme.module';
import { OrganizationComponent } from './organization.component';
import { CreateOrganizationComponent } from './createOrganization.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JwtAuthServiceService} from '../../../@core/interceptor/jwt-auth-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [
    OrganizationComponent,
    CreateOrganizationComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class OrganizationModule { }
