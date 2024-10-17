import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PricePageComponent } from './pages/price-page/price-page.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    PricePageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
