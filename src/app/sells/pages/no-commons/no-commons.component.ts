import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent  {

  name:string = "Susana";
  gender:string = "femenino";

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
}
