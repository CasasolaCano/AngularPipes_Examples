import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sells.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy = 'sin valor'): Heroe[] {

    switch(orderBy) {
      case 'name':
        return heroes.sort((a,b) => (a.name > b.name) ? 1: -1);

      case 'fly':
        return heroes.sort((a,b) => (a.vuela > b.vuela) ? -1: 1);

      case 'color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
        
      default:
        return heroes;
    }

    if(orderBy === 'sin valor') {
      return heroes;
    }

   
    
  }

}
