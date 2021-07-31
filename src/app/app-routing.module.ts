import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/page/home.component";
import {ProductsComponent} from "./modules/products/page/products.component";
import {ContentComponent} from "./layouts/content/content.component";

const routes: Routes = [
  {
    path: 'products',
    component: ContentComponent,
    children: [
      { path: '', component: ProductsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
