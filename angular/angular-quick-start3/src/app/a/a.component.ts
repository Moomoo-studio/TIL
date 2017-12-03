import { OneService } from './../one.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private one: OneService, @Inject('apiUrl') private apiUrl: string) {
    console.log(one.name);
    console.log(apiUrl);
  }

  ngOnInit() {
  }
  click() {
    this.one.name = 'a change';
  }
}
