import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { OrganizationModule } from './organization/organization.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

import { DashboardModule } from '../dashboard/dashboard.module';
import { PagesRoutingModule } from '../pages-routing.module';

import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';

import {StatusModule} from '../admin/status/status.module';
import {RoleModule}  from '../admin/role/role.module';
import {UserRoleModule} from '../admin/user-role/user-role.module';
import {RolePreferenceModule} from '../admin/role-preference/role-preference.module';

const ADMIN_COMPONENTS = [
  
  OrganizationModule,
  CustomerModule,
  UserModule,
  ProductModule,
  StatusModule,
  RoleModule,
  UserRoleModule,
  RolePreferenceModule,

];

@NgModule({
  
  imports: [
    CommonModule,OrganizationModule,CustomerModule,UserModule,ProductModule,
    StatusModule,
    RoleModule,
    UserRoleModule,
    RolePreferenceModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule
  ],
  declarations: [
  ],
})
export class AdminModule { }


