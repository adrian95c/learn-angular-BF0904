import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom//.Emulated//.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element!: {type: string, name: string, content: string}; 
  // @Input() is to expose your variable globally, instead only internal usage
  // using alias on property 'element', act as the name of the DOM property to which the input property is bound. 'element' -> 'srvElement'
  // Typescript 2.7.2 included a strict class checking where all properties should be declared in constructor, (!) exclamation mark for workaround

  constructor() {}

  ngOnInit(){}
}
