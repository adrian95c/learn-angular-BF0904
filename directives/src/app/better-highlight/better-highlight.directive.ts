import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'Transparent';
  @Input() highlightColor: string = 'LightYellow' // You may put alias into @Input('appBetterHighlight') if you are using same name, Example: <p [appBetterHighlight]="'LightSteelBlue'" [defaultColor]="'Aqua'"></p>

  // Easier way compare with @HostListener in this scenario, Renderer and HostListnener are totally fine
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // Renderer2 is recommended when you need to manipulate the DOM directly in Angular, as it provides a safer way to interact with the DOM compared to directly accessing with ElementRef.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'LightPink');

    this.backgroundColor = this.defaultColor;
  }

  // HostListener is a decorator to declares a DOM event to listen for and provides a handler method to run when that event occurs.
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'LightPink');
    this.backgroundColor = this.highlightColor; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'Transparent');
    this.backgroundColor = this.defaultColor;  
  }
}
