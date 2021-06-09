import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sells.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  mayus:boolean = false;

  orderby:string = 'name';
  heroes:Heroe[] = [
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

  changeOrder(value:string) {
    this.orderby = value;
    console.log(value);
  }

}
