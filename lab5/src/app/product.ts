import { NgbRating } from "@ng-bootstrap/ng-bootstrap";

export interface Product{
    category_id: number;
    category_name: string;
    display_flag: boolean;
    items:[{name: string,
        link:string,
        rating:number,
        imagelinks: string,
        like:number}]

}