import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() toggleMenu: boolean = false;

  @Output() hidden = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitHide(event: any) {
    this.hidden.emit(true);
  }

}
