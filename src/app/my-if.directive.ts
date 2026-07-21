import { Directive, Input, ViewContainerRef, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyIfDirective]',
})
export class MyIfDirective {

  //@Input() appMyIfDirective!: boolean;

  constructor(private vc: ViewContainerRef, private tr: TemplateRef<any>) { }

  @Input()
  set appMyIfDirective(val: boolean) {
    if (val) {
      this.vc.createEmbeddedView(this.tr);
    } else {
      this.vc.clear();
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.appMyIfDirective) {
  //     this.vc.createEmbeddedView(this.tr);
  //   } else {
  //     this.vc.clear();
  //   }
  // }
}
