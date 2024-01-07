import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]' // apply [] as attribute style, to recognise it when adding it into element
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'Lavender';
    }
}