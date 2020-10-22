import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.model';
import { ProductsService } from '../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private productsService: ProductsService) { }
  products: IProduct[];

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }

}
