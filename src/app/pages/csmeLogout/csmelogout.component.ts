import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbLogoutComponent, NbAuthService, NB_AUTH_OPTIONS, NbTokenService } from '@nebular/auth';

@Component({
  selector: 'csmeLogout',
  templateUrl: './csmelogout.component.html',
})
// export class CsmeLogoutComponent   extends NbLogoutComponent implements OnInit {
//     constructor(
//       protected service: NbAuthService,
//       @Inject(NB_AUTH_OPTIONS) protected options = {},
//       protected router: Router,
//       protected tokenService: NbTokenService
//     ) {
  
//       super(service, options, router);
//       console.log('in constructor of csmelogout component');
//     }
  
//     ngOnInit() {
//       super.ngOnInit();
//     }
  
//     logout(strategy: string): void {
//       super.logout(strategy);
//       this.tokenService.clear();
//       console.log(this.router);
//       //this.router.navigate(['/auth/login']);
//     }
//   }

export class CsmeLogoutComponent  {
  constructor(  protected router: Router ) {

  
    console.log('in constructor of csmelogout component');
    sessionStorage.removeItem('Token');
    console.log(this.router);
    this.router.navigate(['auth/login']);
    // this.router.navigateByUrl('auth/login').then(e => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }

  ngOnInit() {
   
  }


}
