import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TodosComponent } from "./todos/todos.component";
import { HighliterDirective } from "./highliter.directive";
import { CreditcartDirective } from "./creditcart.directive";
import { ProductlistComponent } from "./productlist/productlist.component";
import { SidebarComponent } from "./productlist/sidebar/sidebar.component";
import { FilterPipe } from "./filter.pipe";
import { AddproductComponent } from "./productlist/addproduct/addproduct.component";
import { UsersignupComponent } from "./usersignup/usersignup.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    HighliterDirective,
    CreditcartDirective,
    ProductlistComponent,
    SidebarComponent,
    FilterPipe,
    AddproductComponent,
    UsersignupComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
