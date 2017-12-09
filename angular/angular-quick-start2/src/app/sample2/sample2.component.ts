import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  name = 'mark';
  test = 'test';

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.name = 'moomoo';
    }, 2000);
  }

  click(event) {
    console.log(event);
    this.name = 'zzaong';
  }

}
