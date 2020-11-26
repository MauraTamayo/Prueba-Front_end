import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {

  constructor(private http: HttpClient) { }

  getNewsByCiudad(ciudad){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q='+ ciudad +'&APPID=8451da407b003ec03d5f5c418af4e7a3'
    );
  }

}
