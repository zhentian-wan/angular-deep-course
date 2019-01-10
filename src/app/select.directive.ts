import { Directive, DoCheck, Input, ViewContainerRef, TemplateRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[selectFrom] [selectWhere] [selectEquals]'
})
export class SelectDirective implements DoCheck {

  entities: Array<any>;
  props: Array<string> | string;
  operations: ['='];
  equals: any;

  @Input()
  set selectFrom (entities) {
    if (entities) {
      this.entities = entities;
    }
  }

  @Input()
  set selectWhere (props: string) {
    this.props = props;
  }

  @Input()
  set selectEquals (val: any) {
    this.equals = val;
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

   ngDoCheck(): void {
     console.log(this.entities, this.props, this.equals);
     const res = this.process(this.entities, this.props, this.equals);
     this.render(res);
   }

   process (entities = [], where, equals = '') {
     if (equals === '') {
      return entities;
     }

     return entities.filter((ent) => {
        return ent[where] === equals;
      });
   }

   render (res) {
    this.viewContainer.clear();
    for (const ent of res) {
      this.viewContainer.createEmbeddedView(this.template, {
        $implicit: ent
      });
    }
   }

}
