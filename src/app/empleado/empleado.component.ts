import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre ="Juan";
  apellido = "Antonio";
  edad = 29;
  empresa = "Inetum";

  /*getEdad(){
    return this.edad;
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
