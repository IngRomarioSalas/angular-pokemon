import { Component, OnInit, ViewChild } from "@angular/core";
import { PokemonService } from "./../api.service";
import swal from'sweetalert2';

@Component({
  selector: "app-load-pokemons",
  templateUrl: "./load-pokemons.component.html",
  styleUrls: ["./load-pokemons.component.scss"]
})
export class LoadPokemonsComponent implements OnInit {
  search = "";
  pokemons: any[] = [];
  page = 0;
  pa=0;
  totalpokemons: number;
  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemon();
  }
  filtro() {
    if (this.search === "") {
      this.pokemons = [];
      this.getPokemon();
    } else {
      this.PokemonService.getDataForName(this.search.toLowerCase()).subscribe(
        (uresponse: any) => {

          if(this.pa===0){
             this.pokemons = [];
             this.pa=1;
          }
          
          //tipos
          this.PokemonService.getDataForType(
                uresponse.types[0].type.url
              ).subscribe((responsewithT: any) => {
                uresponse.types[0].type.name = responsewithT.names[4].name;
              });
              if (uresponse.types[1]?.type.url) {
                this.PokemonService.getDataForType(
                  uresponse.types[1].type.url
                ).subscribe((responsewithT: any) => {
                  uresponse.types[1].type.name = responsewithT.names[4].name;
                });
              }

              //movimientos
              this.PokemonService.getDataForMove(
                uresponse.moves[0].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[0].move.name = responsewithM.names[5].name;
              });
              if (uresponse.moves[1]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[1].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[1].move.name = responsewithM.names[5].name;
              });
              }
              if (uresponse.moves[2]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[2].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[2].move.name = responsewithM.names[5].name;
              });
              }
              if (uresponse.moves[3]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[3].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[3].move.name = responsewithM.names[5].name;
              });
              }

        
          this.pokemons.push(uresponse);
        
        },
        err => {
          console.log("error");
          
          swal.fire({
            imageAlt: "https://stackblitz.com/files/angular-hwzfqf/github/IngRomarioSalas/angular-pokemon/master/src/quien.png",
            title: "ERROR",
            text: "NO EXISTE EL POKEMON"
          })
        }
      );
    }
    this.search = "";
  }
  getPokemon() {
    
    this.PokemonService.getPokemon(2, this.page*2 +1).subscribe(
      (response: any) => {
        this.totalpokemons = response.count;
        response.results.forEach(result => {
          this.PokemonService.getDataForName(result.name).subscribe(
            (uresponse: any) => {
              //tipos
              this.PokemonService.getDataForType(
                uresponse.types[0].type.url
              ).subscribe((responsewithT: any) => {
                uresponse.types[0].type.name = responsewithT.names[4].name;
              });
              if (uresponse.types[1]?.type.url) {
                this.PokemonService.getDataForType(
                  uresponse.types[1].type.url
                ).subscribe((responsewithT: any) => {
                  uresponse.types[1].type.name = responsewithT.names[4].name;
                });
              }

              //movimientos
              this.PokemonService.getDataForMove(
                uresponse.moves[0].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[0].move.name = responsewithM.names[5].name;
              });
              if (uresponse.moves[1]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[1].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[1].move.name = responsewithM.names[5].name;
              });
              }
              if (uresponse.moves[2]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[2].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[2].move.name = responsewithM.names[5].name;
              });
              }
              if (uresponse.moves[3]?.move.url) {
              this.PokemonService.getDataForMove(
                uresponse.moves[3].move.url
              ).subscribe((responsewithM: any) => {
                uresponse.moves[3].move.name = responsewithM.names[5].name;
              });
              }


              
              this.pokemons.push(uresponse);
            }
          );
        });
      }
    );
  }
}
