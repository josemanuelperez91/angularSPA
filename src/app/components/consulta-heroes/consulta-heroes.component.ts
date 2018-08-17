import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-consulta-heroes',
  templateUrl: './consulta-heroes.component.html',
  styleUrls: ['./consulta-heroes.component.css']
})
export class ConsultaHeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const consulta = params.q.toLowerCase();
      this.heroes = this._heroesService.consultaHeroes(consulta);
    });
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
