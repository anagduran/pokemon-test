import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllPokemonService {
  url
  constructor(
    public _http: HttpClient,

  ) {  this.url	= "https://pokeapi.co/api/v2/pokemon/" }



  getPokemons():Observable<any>{
    return this._http.get(this.url+'?limit=20');
  }

  getPokemonDetail(params):Observable<any>{
    return this._http.get(params);
  }

}