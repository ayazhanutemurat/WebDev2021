import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryComponent} from './category/category.component';
const routes: Route[] = [
  {path: 'categories', component: CategoryComponent},
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories/:categoryId/products', component: ProductItemComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
