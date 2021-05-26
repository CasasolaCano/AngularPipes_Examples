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

  clientes:string[] = ['Nuria', 'Francisco', 'Vivido'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }
}
