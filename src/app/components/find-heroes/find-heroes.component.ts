import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeoresService,Heroe} from '../../services/heroes.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-find-heroes',
  templateUrl: './find-heroes.component.html',
  styles: [
  ]
})
export class FindHeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string;
 
  constructor(private _heroesService: HeoresService,
              private _router: Router,
              private _activatedRouter: ActivatedRoute
              ) { 
                                
  }


  ngOnInit(): void {
    this._activatedRouter.params.subscribe(param =>{
      this.termino = param['termino'];
      this.heroes = this._heroesService.findHeroes(param['termino']);  
    })    
  }
  verHeroe(idx:number)
  {
    this._router.navigate(['heroe',idx]);
  }

}
