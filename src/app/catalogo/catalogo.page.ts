import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage {

  pokemons: any[] = [];
  selectedPokemon: any = null;

  constructor(private router: Router, private pokeapi: PokeapiService, private http: HttpClient) {
    this.getPokemons();
  }

  getPokemons() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe((response: any) => {
      this.pokemons = response.results;
    });
  }

  viewPokemonDetails(url: string) {
    this.http.get(url).subscribe((response: any) => {
      this.selectedPokemon = {
        name: response.name,
        height: response.height,
        weight: response.weight,
        abilities: response.abilities.map((ability: any) => ability.ability.name),
        types: response.types.map((type: any) => type.type.name)
      };
      this.router.navigate(['/pokemones', response.id]); // Navega a la página de detalles del Pokémon
    });
  }
  
  // Método para navegar a la página de inicio
  login() {
    this.router.navigate(['/inicio']);
  }

}
