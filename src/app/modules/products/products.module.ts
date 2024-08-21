import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { ProductComponent } from '../../components/product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})

export class ProductsModule { }
