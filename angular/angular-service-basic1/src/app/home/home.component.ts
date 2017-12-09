import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // ,
  // providers: [
  //   LogService
  // ]
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('log') private logService,
    @Inject('apiUrl') private apiUrl
) {
    this.logService.info('Home');
    this.logService.info(apiUrl);
  }

  ngOnInit() {
  }

}
