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

const ADMIN_COMPONENTS = [
  
  OrganizationModule,
  CustomerModule,
  UserModule,
  ProductModule

];

@NgModule({
  
  imports: [
    CommonModule,OrganizationModule,CustomerModule,UserModule,ProductModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule
  ],
  declarations: [
  ],
})
export class AdminModule { }


