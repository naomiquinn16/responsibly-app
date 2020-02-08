import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  stats = [
    {
      value: '$15.7 tr',
      text: 'Potential contribution to the global economy by 2030 from AI'
    },
    {
      value: '+ 26%',
      text: 'Up to 26% boost in GDP for local economies from AI by 2030'
    },
    {
      value: '+ 80%',
      text:  '80% of customer interactions will be done without humans in 2020'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
