import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URLBASE = 'https://community-open-weather-map.p.rapidapi.com/weather';
const IDURL = '2172797';
const APIKEY = 'bd75288e5amsh0707e7891270bcep17ea79jsnf7d550f0472e';

@Injectable({
  providedIn: 'root',
})
export class TemperaturaService {
  constructor(private http: HttpClient) {}

  getEstadoTiempo(ciudad: string, codigo: string) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': APIKEY,
    });
    const url = `${URLBASE}?q=${ciudad}%2C${codigo}&id=${IDURL}&lang=null&units=imperial&mode=json`;
    return this.http.get<JSON>(url, { headers: header });
  }
}
