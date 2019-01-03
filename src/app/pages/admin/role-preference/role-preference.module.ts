import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRolePreferenceComponent } from './list-role-preference/list-role-preference.component';
import { RoleNameRenderComponent } from './list-role-preference/RoleNameRender.component';
import { CreateRolePreferenceComponent } from './create/createRolePreference.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JwtAuthServiceService} from '../../../@core/interceptor/jwt-auth-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
  declarations: [ListRolePreferenceComponent,CreateRolePreferenceComponent,RoleNameRenderComponent],
  imports: [
    ThemeModule,
    CommonModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [ RoleNameRenderComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class RolePreferenceModule { }
