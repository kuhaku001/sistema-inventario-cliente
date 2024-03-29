import { Component } from '@angular/core';
import { HeaderMenuService } from "src/app/services/otros/header-menu.service";

@Component({
  selector: 'app-clientes-content',
  templateUrl: './clientes-content.component.html',
  styleUrls: ['./clientes-content.component.css']
})
export class ClientesContentComponent {

  constructor(
    public HeaderMenuService : HeaderMenuService
    ) { }


  ngOnInit(){ 
    this.HeaderMenuService.menuDrop = true
    this.HeaderMenuService.inventario = false
    this.HeaderMenuService.cajas = false
    this.HeaderMenuService.clientes = true
    this.HeaderMenuService.listaDeCompras = false
    this.HeaderMenuService.menu = false
    this.HeaderMenuService.headerText = true
    this.HeaderMenuService.searchInventario = false
    this.HeaderMenuService.productos = false
  }
  
}
