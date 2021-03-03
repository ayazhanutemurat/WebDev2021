import { Component} from '@angular/core';
import {products} from '../products';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  products = products;

  categoryPressed(category_id:any) {
    products[category_id].display_flag = !products[category_id].display_flag
  }

  likeItem(category_id:any, item_id:any) {
    products[category_id].items[item_id].likes++
  }

  removeItem(category_id:any, item_id:any) {
    products[category_id].items.splice(item_id, 1)
    for (var i=item_id; i<products[category_id].items.length; i++) {
      products[category_id].items[i].id = i
      
    }
  }


}


