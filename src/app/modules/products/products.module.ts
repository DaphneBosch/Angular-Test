import { NgModule } from '@angular/core';
import { ProductsRoutes } from './products-routing.module';
import { ProductsComponent } from './page/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductsRoutes,
  ]
})
export class ProductsModule { }
