import { Component } from '@angular/core';

// Component Decorator 인자들이 필요함
@Component({
    selector: 'app-test',
    template: `
      <p>오늘은 첫 세미나 날입니다.</p>
    `,
    styles: [`
    p{color: red}
    `]
})
// 위에는 표현계층
// 아래는 동작계층
export class TestComponent {

}
