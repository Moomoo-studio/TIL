import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: ['./ts-button.component.css']
})
export class TsButtonComponent implements OnInit {

  message = '버튼이 눌리지 않았다.';
  disabled = false;
  constructor() { }

  ngOnInit() {
  }
  async click() {
    this.message = '버튼이 방금 눌렸다.';
    this.disabled = true;
    await timer(5000).toPromise();
      this.message = '버튼이 눌리지 않았다.';
      this.disabled = false;
    // });
    // timer(5000).subscribe(() => {
    //   this.message = '버튼이 눌리지 않았다.';
    //   this.disabled = true;
    // });
    // await tick(5000);

    // awiat new Promise().setTimeout(() => {
    //   this.message = '버튼이 눌리지 않았다.';
    //   this.disabled = false;
    // }, 5000);
  }
}


function tick(time: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
// tslint:disable-next-line:eofline
}