import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProductLine } from '../models/product-line';

@Component({
  selector: 'app-product-lines',
  templateUrl: './product-lines.component.html',
  styleUrls: ['./product-lines.component.css']
})
export class ProductLinesComponent implements OnInit {

  productLines: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) { 
    this.productLines = db.list('/product-lines');
  }

  ngOnInit() {
  }

}
