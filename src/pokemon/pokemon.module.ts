import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
//Translation
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { PokemonComponent } from "./pokemon.component";
import { LoadPokemonsComponent } from "./load-pokemons/load-pokemons.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  declarations: [PokemonComponent, LoadPokemonsComponent],
  bootstrap: [PokemonComponent]
})
export class PokemonModule {}
