import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {

  pokemons: any[] = [];
  selectedPokemon: any = null;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonId = params['id'];
      if (pokemonId) {
        this.getPokemonDetails(pokemonId);
      }
    });
    this.getPokemons();
  }

  getPokemons() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe((response: any) => {
      this.pokemons = response.results;
    });
  }

  getPokemonDetails(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((response: any) => {
      this.selectedPokemon = {
        name: response.name,
        height: response.height,
        weight: response.weight,
        abilities: response.abilities.map((ability: any) => ability.ability.name),
        types: response.types.map((type: any) => type.type.name),
        image: response.sprites.front_default // URL de la imagen del Pokémon
      };
    });
  }

  catalogo() {
    this.router.navigate(['/catalogo']);
  }

}
