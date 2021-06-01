import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  // Json

  albums = [
    {
      name: 'Lizard',
      year: 1978
    },
    {
      name: 'In the Court of the Crimson King',
      year: 1988
    },
    {
      name: 'Lady Formentera',
      year: 1990
    }
  ]

  //Async Pipe

  myObservable = interval(1000);

  valuePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promsea ');
    }, 3500);
  });
}
