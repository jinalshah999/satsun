import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TododataService } from "../tododata.service";

@Component({
  selector: "app-addtodo",
  templateUrl: "./addtodo.component.html",
  styleUrls: ["./addtodo.component.css"],
})
export class AddtodoComponent implements OnInit {
  constructor(private _tododata: TododataService) {}

  ngOnInit(): void {}
  onTodoSubmit(f: NgForm) {
    this._tododata.addtodo(f.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
