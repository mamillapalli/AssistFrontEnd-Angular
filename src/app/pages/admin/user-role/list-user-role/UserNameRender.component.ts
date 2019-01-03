import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class UserNameRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of UserNameRenderComponent`);
      console.log(this.rowData);
      console.log(this.rowData.user.firstname);
    this.renderValue = this.rowData.user.firstname + " " +this.rowData.user.lastname;
  }

}
