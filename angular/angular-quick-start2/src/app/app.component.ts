import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '안녕하세요.';
  names = [
    'moomoo1',
    'moomoo2',
    'moomoo3',
    'moomoo4'
  ];
  custom() {
    console.log('custom');
  }
}
