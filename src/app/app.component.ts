import { Component } from '@angular/core';
import { Empleado } from './empleado.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[]=[

    new Empleado("Mateo","Giraldo","Developper",1000),
    new Empleado("Anderson","Avarte","Developper",1000),
    new Empleado("Cristobal","Colon","Developper",1000),
    new Empleado("Juan","Camilo","Developper",1000),


  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
