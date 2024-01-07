import { Directive, OnInit, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // Renderer2 is recommended when you need to manipulate the DOM directly in Angular, as it provides a safer way to interact with the DOM compared to directly accessing with ElementRef.
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'LightPink');
  }
}
