import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserRoleComponent } from './list-user-role/list-user-role.component';
import { CustomerNameRenderComponent } from './list-user-role/CustomerNameRender.component';
import { UserNameRenderComponent } from './list-user-role/UserNameRender.component';
import { ProductNameRenderComponent } from './list-user-role/ProductNameRender.component';
import { RoleNameRenderComponent } from './list-user-role/RoleNameRender.component';
import { CreateUserRoleComponent } from './create/createUserRole.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JwtAuthServiceService} from '../../../@core/interceptor/jwt-auth-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [ListUserRoleComponent,CreateUserRoleComponent,
  CustomerNameRenderComponent,
  UserNameRenderComponent,
  ProductNameRenderComponent,
  RoleNameRenderComponent],
  imports: [
    ThemeModule,
    CommonModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [ CustomerNameRenderComponent, UserNameRenderComponent, ProductNameRenderComponent, RoleNameRenderComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class UserRoleModule { }
