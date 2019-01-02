import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class ProductsRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
      console.log(` in ngoninit of ProductsRenderComponent`);
      console.log(`this.value --> ${this.value} `);
      //this sets all product descriptions to a max length of 10 characters
      let productsList: string = '';
      this.rowData.products.forEach( (element) => {
        if(productsList!='') {
          productsList = productsList + " , " + element.name;
        }
        else
        {
          productsList = element.name;
        }
      });
      console.log(productsList);
    this.renderValue = productsList;
  }

}
