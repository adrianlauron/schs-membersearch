import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
    this.showMenu = false;
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public detectAction()
  {
    this.showMenu = false;
  }

}
