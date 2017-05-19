import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['data'],
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.css']
})
export class ProductLineComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit() {
  }

}
