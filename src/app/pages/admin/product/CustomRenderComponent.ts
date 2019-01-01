import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of custom render component`);
      console.log(`this.value --> ${this.value} `);
      console.log(this.rowData.organization.name);
    this.renderValue = this.rowData.organization.name;
  }

}
