import { Component, Input, OnInit } from '@angular/core';
import { Hero } from "../hero"; //Imprt interfejsu

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  @Input() hero?: Hero //Deklaracja jaką konstrukcję mają przychodzące dane przekzaywane od komponentu matki heroes


  ngOnInit(): void {    //Trochę jak useEffect(() => {},[]) - wywołanie funkcji raz po załadowaniu apki
    this.getHero();
  }

  goBack(): void {
    this.location.back(); //.location pobiera info i historii routingu i cofa nas o krok
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}

//snapshot - info o roucie utworzonego komponentu
//paramMap.get('id) - pobiera z url info o id 