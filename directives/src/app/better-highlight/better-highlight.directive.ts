import { Directive, OnInit, Renderer2, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // Renderer2 is recommended when you need to manipulate the DOM directly in Angular, as it provides a safer way to interact with the DOM compared to directly accessing with ElementRef.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'LightPink');
  }

  // HostListener is a decorator to declares a DOM event to listen for and provides a handler method to run when that event occurs.
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'LightPink');  
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'Transparent');
  }
}
