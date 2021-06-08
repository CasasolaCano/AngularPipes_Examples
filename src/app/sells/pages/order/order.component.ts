import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/sells.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  mayus:boolean = false;
  heroes:Heroes[] = [
    {
      name:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      name:'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      name:'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      name:'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      name:'Linterna Verde',
      vuela:true,
      color: Color.verde
    }
  ]

}
