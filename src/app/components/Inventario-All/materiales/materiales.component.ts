import { Component, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from "../../../services/inventario/material.service";
import { CompartirService } from "../../../services/inventario/compartir.service";
import { CompartirInventarioModificarService } from "src/app/services/inventario/compartir-inventario-modificar.service";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent{

  id: string = ''

  constructor(
    private MaterialService : MaterialService,
    public CompartirService : CompartirService,
    public CompartirInventarioModificarService : CompartirInventarioModificarService
    ) { }

  ngOnInit(){ 
    this.mostrarMateriales()
  }

  mostrarMateriales(){
    this.MaterialService.materialMostrar()
    .subscribe(
      res => {
        this.CompartirService.materiales = res
      },
      err => console.log(err)
    )
  }

  eliminarMaterial(){
    this.MaterialService.materialEliminar(this.id)
    .subscribe(
      res => {
        const newMateriales = this.CompartirService.materiales.filter(
          (material: any) => material._id !== this.id
        )
        this.CompartirService.materiales = newMateriales
      },
      err => console.log(err)
    )
  }

  ApareceModalModificar(){
    this.CompartirInventarioModificarService.modificar = true
    this.CompartirService.styleModalMaterial = 'visibility: visible;'
    console.log(this.id)

    const modMateriales = this.CompartirService.materiales.filter(
      (material: any) => material._id == this.id
    )
    this.CompartirInventarioModificarService.materialModificado = { ...modMateriales[0]}
    this.CompartirInventarioModificarService.copy_materialModificado = { ...modMateriales[0]}
    this.CompartirInventarioModificarService.id = this.id

  }

  // Mouse

  @ViewChild('menu') menu! :ElementRef

  contextmenu(event: MouseEvent){
    event.preventDefault();

    const target = event.target as HTMLElement;

    this.id = target.id.split('-')[0]

    if(this.id.length == 24){
    this.menu.nativeElement.style.display = "block";
    this.menu.nativeElement.style.top = event.pageY + "px"
    this.menu.nativeElement.style.left = event.pageX + "px"

    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }

  click(event: MouseEvent){
    this.menu.nativeElement.style.display = "none";
  }

  disappearContext(){
    this.menu.nativeElement.style.display = "none";
  }

}
