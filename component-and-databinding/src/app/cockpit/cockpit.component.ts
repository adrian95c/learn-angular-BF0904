import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef | any;

  constructor() {}

  ngOnInit(){}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value, // nameInput will be showing <input /> instead of value.
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      //serverName: this.newServerName, 
      serverName: nameInput.value, 
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
