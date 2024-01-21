import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {

  constructor(
    private elementRef: ElementRef, private renderer:Renderer2
    ) {
      this.renderer.setStyle(elementRef.nativeElement,'font-size', '20px')
     }

}
