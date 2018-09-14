import { AfterContentInit, Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit, AfterContentInit {

    // private nativeElement  : Node;
    private nativeElement2 : ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {
      // this.nativeElement = el.nativeElement;
       this.nativeElement2 = el.nativeElement;
  }

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'test');
    }

    ngAfterContentInit() {
        // let inputElement = this.renderer.createElement(this.nativeElement, "input");
        // this.renderer.setElementAttribute(inputElement, "value", "Hey");
        // this.renderer.invokeElementMethod(inputElement, "focus");
        //
         let buttonElement =  this.renderer.createElement("button","body");
         this.renderer.createText("Click Me!");
        // this.renderer.setElementProperty(buttonElement, "disabled", false);
        // this.renderer.listen(buttonElement, "click", ( event ) => console.log(event));
        // this.renderer.setElementClass(buttonElement, "btn-large", true);
        this.renderer.setStyle(buttonElement,"backgroundColor", "yellow");

        this.renderer.listen("body", "click", () => console.log("Global Click"));
    }

}
