import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TododataService } from "./tododata.service";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  Id: string;
  Title: string;
  Status: string = "pending";
  StatusArr: string[] = ["done", "pending"];
  todoarr: Todo[] = [];
  flag: boolean = false;

  constructor(private _tododata: TododataService) {}

  ngOnInit(): void {
    this._tododata.getAllTodos().subscribe(
      (data) => {
        this.todoarr = data;
        console.log(data);
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("patyu");
      }
    );
  }
  onButtonClick() {
    this.flag = !this.flag;
  }
  onDeleteClick(item: Todo): void {
    this._tododata.deletetodo(item.Id).subscribe(
      (data: any) => {
        console.log(data);
        if (data.affectedRows == 1) {
          this.todoarr.splice(this.todoarr.indexOf(item), 1);
        }
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("delete call end");
      }
    );
  }
  onAddTodo(): void {
    this.todoarr.push(new Todo(this.Id, this.Title, this.Status));
    this.flag = false;
  }
  onAddNewClick(): void {
    this.flag = true;
  }
  onEditClick(item: Todo): void {
    if (item.Status == "done") {
      item.Status = "pending";
    } else {
      item.Status = "done";
    }
  }
}
