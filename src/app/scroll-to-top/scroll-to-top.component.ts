import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  private toShow= false;

  @Input()
    set toshow(boo : boolean){
      this.toShow = boo;
    }

  constructor() { }
    getStyle(){
    return (this.toShow) ? 'inline' : 'none';
  }
  ngOnInit() {
  }

}
