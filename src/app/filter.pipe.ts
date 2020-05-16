import { Pipe, PipeTransform } from "@angular/core";
import { Products } from "./productlist/product";

@Pipe({
  name: "filter",
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Products[], str: string): Products[] {
    return value.filter((x) => x.pro_name.startsWith(str));
  }
}
