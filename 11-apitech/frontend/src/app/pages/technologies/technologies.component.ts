import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Technology } from 'src/app/models/technology.model';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies!: Technology[];

  constructor(public _httpService: HttpService) { } //aqui recibe a nuestro servicio creado inyecion de dependencia

  ngOnInit(): void {
    //cada vez que este compomente de inicia se ejecuta este metodo
    this._httpService
    .getTechnologies()
    .subscribe((technologies: Technology[])=>{
      this.technologies = technologies;
      debugger
    })
    
  }
//funciona
}
