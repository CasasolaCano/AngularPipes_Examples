import { Component} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent  {

  nameLower:string = "FRANCISCO"
  nameUpper:string = "francisco"
  nameComplete:string = "fRanCiSco"

  fecha:Date = new Date();

}
