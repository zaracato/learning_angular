import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../../core/services/products/products.service';
import { IProduct } from '../../interfaces/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  constructor( 
      private route: ActivatedRoute,
      private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((
      params: Params) =>{
        const id = params.id;
        this.product = this.productsService.getProduct(id);
    });
  }

}
