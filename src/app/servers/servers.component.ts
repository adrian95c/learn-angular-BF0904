import { Component } from '@angular/core';

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
export class ServersComponent {

}
