import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
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
  todoarr: Todo[] = [
    new Todo("1", "EMail to your manager", "done"),
    new Todo("2", "push your code to github", "pending"),
    new Todo("3", "go for running", "pending"),
  ];
  flag: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    this.flag = !this.flag;
  }
  onDeleteClick(item: Todo): void {
    this.todoarr.splice(this.todoarr.indexOf(item), 1);
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
