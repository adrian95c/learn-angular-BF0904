import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // You may change it from element to attribute or class
  /*
  selector: '[app-servers]', // attribute
  selector: '.app-servers',  // class
  */
  templateUrl: './servers.component.html',
  /*
  you use inline template like: (*if your content is not a lots)
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  */
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "";

  constructor(){
    setTimeout(() => { this.allowNewServer = true;
    }, 5000);
  }
  
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created.";
  }

  onUpdateServerName(event : Event){
    //console.log(event); //To observe input event firing
    this.serverName = (<HTMLInputElement>event.target).value; //explicity casting to provides special properties and methods for manipulating the options, layout, and presentation of <input> elements.
  }
}
