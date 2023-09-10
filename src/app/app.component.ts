import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //It tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an application's HTML contains <app-root></app-root> , then Angular inserts an instance of the AppComponent view between those tags.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-bf0904';
}
