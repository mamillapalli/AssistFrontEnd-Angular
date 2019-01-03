import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomerNameRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of CustomerNameRenderComponent`);
      console.log(this.rowData.customer.name);
    this.renderValue = this.rowData.customer.name;
  }

}
