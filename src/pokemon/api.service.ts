import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {}
  getPokemon(limit: number, offset: number) {
    return this.http.get<any>(
      this.baseUrl + "?limit=" + limit + "&offset=" + offset
    );
  }
  getDataForName(name: String) {
    return this.http.get<any>(this.baseUrl + "/" + name);
  }
  getDataForType(url: string) {
    return this.http.get<any>(url);
  }
  getDataForMove(url: string) {
    return this.http.get<any>(url);
  }
}
