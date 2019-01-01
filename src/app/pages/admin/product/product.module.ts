import { NgModule } from '@angular/core';


import { ThemeModule } from '../../../@theme/theme.module';
import { ProductComponent } from './product.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthServiceService } from '../../../@core/interceptor/jwt-auth-service.service';
import {CustomRenderComponent} from './CustomRenderComponent';
import {createProductComponent} from './createProduct.component'

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ProductComponent,
    CustomRenderComponent,
    createProductComponent,
  ],
  entryComponents: [ CustomRenderComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class ProductModule { }
