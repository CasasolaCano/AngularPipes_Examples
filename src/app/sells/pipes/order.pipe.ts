import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sells.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {

    heroes = heroes.sort((a,b) => (a.name > b.name) ? 1: -1);

    return heroes;
  }

}