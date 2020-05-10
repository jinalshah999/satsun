import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighliter]",
})
export class HighliterDirective {
  backColor: string = "";

  @Input() color: string = "red";
  constructor() {}

  @HostListener("mouseenter") mouseover() {
    this.backColor = this.color;
  }
  @HostListener("mouseleave") mouseleave() {
    this.backColor = "white";
  }

  @HostBinding("style.background-color") get setColor1() {
    return this.backColor;
  }
}
