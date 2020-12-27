import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.css']
})
export class TechnologyCardComponent implements OnInit {

  @Input() technology: any ={};//al moneto de llamar al selector o tag tienen que pasarle rechnology
  constructor() { }
  ngOnInit(): void {
  } 

}
//recibira toda la data de technologies