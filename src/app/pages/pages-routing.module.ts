import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationComponent } from './admin/organization/organization.component';
import { ProductComponent } from './admin/product/product.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { UserComponent } from './admin/user/user.component';


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
      path: 'customer',
      component: CustomerComponent,
    },
    {
      path: 'product',
      component: ProductComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
