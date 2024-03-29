import { Component } from '@angular/core';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }


  ngOnInit(){ 
  this.HeaderMenuService.menuDrop = false
  this.HeaderMenuService.headerText = true
  this.HeaderMenuService.searchInventario = false
  }
}
