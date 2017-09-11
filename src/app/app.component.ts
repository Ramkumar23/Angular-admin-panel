import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
        '(window:scroll)': 'showScrollTop($event)'
  }
})
export class AppComponent {
   isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

    constructor(){

    }
    showScrollTop(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

}

