import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environnement } from 'src/environnements/environnement';

export interface Weather {
  address: string;
  currentConditions : {
      temp: number;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  // J'importe les informations de mon fichier environnement en le mettant dans des variables
  apiUrl = environnement.weatherApi.apiUrl;
  apiKey = environnement.weatherApi.apiKey;

  constructor(private http: HttpClient) { }

  // Je créer une fonction pour récupérer les informations du Tiruana en utilisant les variables que j'ai créé au dessus
  getData(): Observable<Weather> {
      const url = `${this.apiUrl}/Tirana?unitGroup=metric&key=${this.apiKey}&contentType=json`
      return this.http.get<Weather>(url);
  }
  // Mon service est fini (je crois) il ne me reste plus qu'a l'appeler dans le header
}
