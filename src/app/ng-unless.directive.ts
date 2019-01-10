import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngUnless]'
})
export class NgUnlessDirective {

  @Input()
  set ngUnless (condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any> ,
    private viewContainerRef: ViewContainerRef
  ) { 

  }

}
