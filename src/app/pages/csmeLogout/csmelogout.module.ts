import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { CsmeLogoutComponent } from './csmelogout.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CsmeLogoutComponent,
  ],
})
export class CsmeLogoutModule { }
