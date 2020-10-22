import {
    Component,
    Input,
    Output,
    EventEmitter ,
    DoCheck,
    SimpleChange,
    OnInit ,
    OnDestroy} from '@angular/core';
import { IProduct } from '../../interfaces/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})
export class ProductComponent   {
   @Input() product: IProduct;
   @Output() productClicked: EventEmitter<any> = new EventEmitter();

   today = new Date();
   constructor(){
       console.log('constructor');
   }
/*
   ngOnChanges(changes: SimpleChange){
       console.log('ngOnChanges');
   }

   ngOnInit(): void{
       console.log('ngOnInit');
   }

   ngDoCheck(): void{
        console.log('ngDoCheck');
   }
   ngOnDestroy(): void{
       console.log('ngOnDestroy');
   }
   */
   addCart(): void{
       console.log('Agregar al carrito');
       this.productClicked.emit(this.product.id);
   }
}
