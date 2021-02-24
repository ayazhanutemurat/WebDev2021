import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
const routes: Route[] = [
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path: 'product-item', component: ProductItemComponent },
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
