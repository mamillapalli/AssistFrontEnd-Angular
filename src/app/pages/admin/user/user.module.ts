import { NgModule } from '@angular/core';


import { ThemeModule } from '../../../@theme/theme.module';
import { UserComponent } from './user.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthServiceService } from '../../../@core/interceptor/jwt-auth-service.service';
import {OrganizationRenderComponent} from './OrganizationRenderComponent';
import {CustomerRenderComponent} from './CustomerRenderComponent';
import {CreateUserComponent}  from './createUser.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule
  ],
  declarations: [
    UserComponent,
    OrganizationRenderComponent,
    CustomerRenderComponent,
    CreateUserComponent,

  ],
  entryComponents: [ OrganizationRenderComponent,CustomerRenderComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class UserModule { }
