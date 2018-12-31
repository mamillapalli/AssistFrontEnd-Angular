import { NgModule } from '@angular/core';


import { ThemeModule } from '../../../@theme/theme.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ProductComponent,
  ],
})
export class ProductModule { }
