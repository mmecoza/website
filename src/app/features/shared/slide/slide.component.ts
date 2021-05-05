import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input()src = '';
  @Input()text = '';
  @Input()listenTo = '';
  @Output()listenNow = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  listenClicked(): void {
    this.listenNow.emit({res: !!this.listenTo ? this.listenTo : 'default'});
  }


}
