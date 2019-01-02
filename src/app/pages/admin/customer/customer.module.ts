import { NgModule } from '@angular/core';


import { ThemeModule } from '../../../@theme/theme.module';
import { CustomerComponent } from './customer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthServiceService } from '../../../@core/interceptor/jwt-auth-service.service';
import {OrganizationRenderComponent} from './OrganizationRenderComponent';
import {ProductsRenderComponent} from './ProductsRenderComponent';
import {CreateCustomerComponent} from './createCustomer.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    CustomerComponent,
    OrganizationRenderComponent ,
    ProductsRenderComponent,
    CreateCustomerComponent,
  ],
  entryComponents: [ OrganizationRenderComponent,ProductsRenderComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],

})
export class CustomerModule { }
