import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"],
})
export class AddproductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onProductSubmit(f: NgForm) {
    console.log(f);
  }
}
