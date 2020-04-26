import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  //template: ` <h1>hello from Demo component</h1> `,
  styleUrls: ["./demo.component.css"],
  //styles:[]
})
export class DemoComponent implements OnInit, AfterViewInit {
  @ViewChild("txtdemo") txtdemo: ElementRef;
  @ViewChildren("jinal") htarr: QueryList<ElementRef>;
  no: number = 10;
  flag: boolean = true;
  no1: number = 0;
  no2: number = 0;
  ans: number = 0;
  str: string = "jinal shah";
  ans1: number = 0;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.txtdemo.nativeElement.value);

    console.log("demo of view children", this.htarr);

    this.htarr.forEach((x) => {
      console.log(x.nativeElement.innerHTML);
    });
  }
  onClick() {
    this.flag = !this.flag;
  }
  onKeyUp() {
    alert("hello");
  }
  onAddClick() {
    this.ans = this.no1 + this.no2;
  }
  onAdd1Click(x, y) {
    console.log(this.txtdemo.nativeElement.value);
    this.ans1 = parseInt(x) + parseInt(y);
  }
}
