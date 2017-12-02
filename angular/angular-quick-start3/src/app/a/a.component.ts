import { OneService } from './../one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private one: OneService) {
    console.log(one.name);
  }

  ngOnInit() {
  }
  click() {
    this.one.name = 'a change';
  }
}
