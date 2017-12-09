import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {


  // snapshot init Required
  // name = '';

  // rxjs init not required
  // html use async pipe
  /**
   * in html
   * {{ name | async }}
   */
  name;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.paramMap.get('name'));
    // this.name = this.route.snapshot.paramMap.get('name');

    // observable syntax error
    // this.name = this.route.params.map(p => p.name);

    this.name = this.route.params.map(p => p.name);
  }

  ngOnInit() {
  }

}
