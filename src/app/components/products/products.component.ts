import { Component, OnInit } from '@angular/core';
import { Products } from './products.model';
import product from '../../../assets/brand/data/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Products[] = product;

  constructor() { }

  ngOnInit(): void {
    console.log(`products : `, this.products);
  }

}
