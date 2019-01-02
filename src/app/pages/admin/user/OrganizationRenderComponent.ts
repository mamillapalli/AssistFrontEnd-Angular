import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class OrganizationRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of OrganizationRenderComponent`);
      console.log(this.rowData);
      // let organizationDoesntExist = this.rowData.organization==null;
      // console.log(organizationDoesntExist);
      if( this.rowData.organization==null)
      {

        console.log('organization is null');
        this.renderValue = '';

      }
      else
      {
        
        console.log(this.rowData.organization.name);
        this.renderValue = this.rowData.organization.name;

      }
  }

}
