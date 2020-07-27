import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
// Importar el servicio de heroes
import {HeoresService,Heroe} from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe:Heroe;
  

  constructor(private _activatedRouter: ActivatedRoute,
               private _heroesService: HeoresService 
    ) {
    this._activatedRouter.params.subscribe(params =>{
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
   }


}
