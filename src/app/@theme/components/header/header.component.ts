import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {  Router } from '@angular/router';



@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  // user: any;
  user = {};

  userMenu = [{ title: 'Profile' }, { title: 'Log out',link: '/logout' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private authService: NbAuthService,
              private router: Router) {

                this.authService.onTokenChange()
                .subscribe((token: NbAuthJWTToken) => {
          
                  if (token.isValid()) {
                    console.log("ASSIGNING TOKEN TO USER VARIABLE");
                    this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
                   // this.router.navigate(['auth/logout']);
                   sessionStorage.setItem('Token', `Bearer ${token}`);
                   console.log(this.user);
                  }
          
                });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
