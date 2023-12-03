import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element!: {type: string, name: string, content: string}; 
  // @Input() is to expose your variable globally, instead only internal usage
  // Typescript 2.7.2 included a strict class checking where all properties should be declared in constructor, (!) exclamation mark for workaround

  constructor() {}

  ngOnInit(){}
}
