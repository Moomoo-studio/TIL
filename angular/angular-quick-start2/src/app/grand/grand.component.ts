import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  
  @Input() age = 30;
  // @Output() next = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.age = this.age + 1;
    //   this.next.emit();
    // }, 1000);
  }

  next() {
    this.age = this.age + 1;
  }
}
