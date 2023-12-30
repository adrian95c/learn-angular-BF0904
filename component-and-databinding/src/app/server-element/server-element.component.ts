import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom//.Emulated//.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element!: {type: string, name: string, content: string}; 
  // @Input() is to expose your variable globally, instead only internal usage
  // using alias on property 'element', act as the name of the DOM property to which the input property is bound. 'element' -> 'srvElement'
  // Typescript 2.7.2 included a strict class checking where all properties should be declared in constructor, (!) exclamation mark for workaround
  @Input() name!: string;
  @ViewChild('heading') header!: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called!')
    console.log('Text Content: ' + this.header.nativeElement.textContent); // This wont work because the DOM is yet initialise/ render, you wont have access/ use value/ content to template.
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!'); // refer to the content belong to app.component
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!'); // Usually will be called after every check, like ngDoCheck
  }

  // Both will be called after content being check
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
