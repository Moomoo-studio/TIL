import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit{
  
  @Input() age = 20;
  
  @Output() next = new EventEmitter();
  constructor() {
    console.log('constructor');
   }
  
  ngOnInit() {
    console.log('ng on init');
    setTimeout(() => {
      this.age = this.age + 1;
      this.next.emit();
    }, 1000);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on chagnes');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  click(value , event) {
    console.log(value);
    console.log(event);
  }
}
