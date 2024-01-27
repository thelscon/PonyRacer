import { Component } from '@angular/core';

import { RaceModel } from '../models/race.model';
import { RaceComponent } from '../race/race.component';
import { RacesComponentModel } from './races.component.model';

import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [RaceComponent],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent implements RacesComponentModel {
  readonly races: Array<RaceModel>;

  constructor(racesService: RaceService) {
    this.races = racesService.list();
  }
}
