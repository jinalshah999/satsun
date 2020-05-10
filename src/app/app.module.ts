import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TodosComponent } from './todos/todos.component';
import { HighliterDirective } from './highliter.directive';
import { CreditcartDirective } from './creditcart.directive';
import { ProductlistComponent } from './productlist/productlist.component';
import { SidebarComponent } from './productlist/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, TodosComponent, HighliterDirective, CreditcartDirective, ProductlistComponent, SidebarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
