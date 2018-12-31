/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAuthModule,NbPasswordAuthStrategy,NbAuthJWTToken } from '@nebular/auth';
import {JwtAuthServiceService} from './@core/interceptor/jwt-auth-service.service';



@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8080/',
          login: {
            // ...
            endpoint: 'jwtAuthenticate/login',
            redirect: {
              success: '/pages/dashboard',
              failure: '',
            },
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token', 
          }
        }),
      ],
      forms: {login: {
        redirectDelay: 10, // delay before redirect after a successful login, while success message is shown to the user
        strategy: 'email',  // strategy id key.
        rememberMe: true,   // whether to show or not the `rememberMe` checkbox
        showMessages: {     // show/not show success/error messages
          success: true,
          error: true,
        }}},
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthServiceService, multi: true},
  ],
})
export class AppModule {
}
