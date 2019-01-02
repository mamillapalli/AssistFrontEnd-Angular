import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './admin/organization/organization.component';
import { CreateOrganizationComponent } from './admin/organization/createOrganization.component';
import { ProductComponent } from './admin/product/product.component';
import { createProductComponent } from './admin/product/createProduct.component';
import { CustomerComponent } from './admin/customer/customer.component';
import {CreateCustomerComponent} from './admin/customer/createCustomer.component';
import { UserComponent } from './admin/user/user.component';
import { CreateUserComponent } from './admin/user/createUser.component';
import {ListStatusComponent} from './admin/status/list-status/list-status.component'
import {ListRoleComponent} from './admin/role/list-role/list-role.component'
import {ListRolePreferenceComponent} from './admin/role-preference/list-role-preference/list-role-preference.component'
import {ListUserRoleComponent} from './admin/user-role/list-user-role/list-user-role.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // },
    {
      path: 'organization',
      component: OrganizationComponent,
    },
    {
      path: 'createOrganization',
      component: CreateOrganizationComponent,
    },
    {
      path: 'customer',
      component: CustomerComponent,
    },
    {
      path: 'createCustomer',
      component: CreateCustomerComponent,
    },
    {
      path: 'product',
      component: ProductComponent,
    },
    {
      path: 'createProduct',
      component: createProductComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'createUser',
      component: CreateUserComponent,
    },
    {
      path: 'status',
      component: ListStatusComponent,
    },
    {
      path: 'Role',
      component: ListRoleComponent,
    },
    {
      path: 'UserRole',
      component: ListUserRoleComponent,
    },
    {
      path: 'RolePreference',
      component: ListRolePreferenceComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
