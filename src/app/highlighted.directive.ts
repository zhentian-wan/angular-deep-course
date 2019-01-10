import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted') isHighLighted = false;

  @HostBinding('class.highlighted')
  get highlighted () {
    return this.isHighLighted;
  }

  @HostBinding('attr.aria-disabled')
  get label () {
    return this.isHighLighted ? false : true;
  }

  constructor() { }

}
