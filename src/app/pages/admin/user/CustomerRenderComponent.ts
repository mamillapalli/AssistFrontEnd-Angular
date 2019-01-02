import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomerRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of CustomerRenderComponent`);
      console.log(this.rowData);
      if(this.rowData.customer!=null) {
        console.log(this.rowData.customer.name);
        this.renderValue = this.rowData.customer.name;
      }
     // if(this.rowData.comp)
      //console.log(this.rowData.company.name);
      else
      {
        this.renderValue = "";
      }
  }

}
