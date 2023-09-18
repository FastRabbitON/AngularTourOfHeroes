import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero" //Import interfejsu

import { HeroService } from '../hero.service'; //Import danych
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //Deklaracja zmiennej/właściwości
  heroes: Hero[] = [];

  // selectedHero?: Hero  określenie struktury zmiennej || ? - opcjonalne przez co może mieć na start null lulb undefined

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }



}
