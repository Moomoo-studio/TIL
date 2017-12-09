import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() age = 25;
  @Output() next = new EventEmitter();
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.age = this.age + 1;
      this.next.emit();
    }, 1000);
  }

}
