import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosCompartirService {

  id = ''

  modalPedidos : Boolean = false

  modalPedidosModificar : Boolean = false

  copyPedido :any

  constructor() { }

}