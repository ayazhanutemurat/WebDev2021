import { Component, OnInit } from '@angular/core';
import { Product} from '../product';
import {PRODUCTS} from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = PRODUCTS;
  selectedProduct?: Product;
  constructor() { }
  starRating = 0; 
  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
