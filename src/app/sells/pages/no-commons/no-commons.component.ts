import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent  {

  //i18nSelect Pipe
  name:string = "Susana";
  gender:string = "femenino";

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural Pipe

  clientes:string[] = ['Nuria', 'Francisco', 'Vivido', "Domingo", "María"];
  clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  CambiarNombre() {
    this.name = "Francisco",
    this.gender = "masculino"
  }

  BorrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe

  person = {
    name: 'Sebastian',
    edad:35,
    address:'Paris, Francia'
  }
}
