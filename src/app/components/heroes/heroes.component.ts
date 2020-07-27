import { Component, OnInit } from '@angular/core';
// Importar el servicio de heroes
import {HeoresService,Heroe} from '../../services/heroes.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
 
  constructor(private _heroesService: HeoresService,
              private _router: Router
              ) { 
    //console.log('contructor');
  }

  ngOnInit(): void {
    
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }
  verHeroe(idx:number)
  {
    this._router.navigate(['heroe',idx]);
  }

}
