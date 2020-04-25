import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  //template: ` <h1>hello from Demo component</h1> `,
  styleUrls: ["./demo.component.css"],
  //styles:[]
})
export class DemoComponent implements OnInit {
  no: number = 10;
  flag: boolean = true;

  str: string = "jinal shah";
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.flag = !this.flag;
  }
  onKeyUp() {
    alert("hello");
  }
}
