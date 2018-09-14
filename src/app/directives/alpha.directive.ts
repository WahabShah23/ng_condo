import { Directive, ElementRef, Renderer2, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appAlpha]'
})
export class AlphaDirective {

  constructor(private elRef: ElementRef, private renderer : Renderer2) { }

    @ViewChild('heading') heading: ElementRef;

  @HostListener('click')
  performAction() {

    if (true) {
          alert("Ho Ro, Rattling Bog down the Valley-O");
    }
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('this is sample text');

      this.renderer.appendChild(div, text);

      // const newElement = this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.elRef.nativeElement, div);

      this.renderer.addClass(this.elRef.nativeElement, 'someClass');

      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

}
