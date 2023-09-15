import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-web';
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
