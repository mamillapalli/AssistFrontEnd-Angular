import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class RoleNameRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of RoleNameRenderComponent`);
      console.log(this.rowData.role.name);
    this.renderValue = this.rowData.role.name;
  }

}
