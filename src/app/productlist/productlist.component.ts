import { Component, OnInit } from "@angular/core";
import { Products } from "./product";

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.css"],
})
export class ProductlistComponent implements OnInit {
  dt = new Date(2020, 4, 10);
  productsArr: Products[] = [
    {
      pro_id: 1,
      pro_name: "omega",
      pro_price: 10000,
      pro_img:
        "http://cdn2.jomashop.com/media/catalog/product/o/m/omega-seamaster-planet-ocean-black-dial-men_s-watch-232.30.42.21.01.001_1.jpg",
      pro_qty: 5,
    },
    {
      pro_id: 2,
      pro_name: "fossil",
      pro_price: 12000,
      pro_img:
        "http://ecx.images-amazon.com/images/I/51fnWFY3s3L._AC_UL260_SR200,260_.jpg",
      pro_qty: 5,
    },
    {
      pro_id: 3,
      pro_name: "timex",
      pro_price: 10400,
      pro_img:
        "http://ecx.images-amazon.com/images/I/51fnWFY3s3L._AC_UL260_SR200,260_.jpg",
      pro_qty: 5,
    },
    {
      pro_id: 4,
      pro_name: "titan",
      pro_price: 15000,
      pro_img:
        "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/ZN8AAOSwd4tT5KNF/$_32.JPG",
      pro_qty: 5,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onSearchClick(value: string) {
    this.productsArr = this.productsArr.filter((x) => x.pro_name == value);
  }
  onDeleteProduct(item) {
    this.productsArr.splice(this.productsArr.indexOf(item), 1);
  }
}
