import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})

export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
  private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe(params.id);

    });
  }
  getCasa() {
    if (this.heroe.casa === 'Marvel') {
      return 'assets/img/logo-marvel.png';
    } else if (this.heroe.casa === 'DC' ) {
      return 'assets/img/logo-dc.jpg';
    }
    return;
  }
}
