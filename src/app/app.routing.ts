import { Routes, RouterModule } from "@angular/router";
import { TodosComponent } from "./todos/todos.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { UsersignupComponent } from "./usersignup/usersignup.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AddtodoComponent } from "./todos/addtodo/addtodo.component";

const arr: Routes = [
  { path: "", component: TodosComponent },
  { path: "products", component: ProductlistComponent },
  { path: "signup", component: UsersignupComponent },
  { path: "addtodo", component: AddtodoComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "/pagenotfound" },
];

export const routingarr = RouterModule.forRoot(arr);
