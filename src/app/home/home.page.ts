import { Component, NgModule } from '@angular/core';
import { ApiClimaService } from  '../services/api-clima.service'; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public AllData:any = {
    main: ""
  };

  public AllDataDos:any = {
    main: ""
  };

  public AllDataTres:any = {
    main: ""
  };

  constructor( private apiClimaService: ApiClimaService ) {}


  ngOnInit() {
    let ciudad = "Bogota";
    this.apiClimaService.getNewsByCiudad(ciudad).subscribe((response) => {
      console.log("aqui =>", response);
      this.AllData = response;
    });

    let ciudadDos = "Lyon";
    this.apiClimaService.getNewsByCiudad(ciudadDos).subscribe((response) => {
      console.log("aqui =>", response);
      this.AllDataDos = response;
    });

    let ciudadTres = "Paris";
    this.apiClimaService.getNewsByCiudad(ciudadTres).subscribe((response) => {
      console.log("aqui =>", response);
      this.AllDataTres = response;
    });
  }

}
