import { Component, Input } from '@angular/core';

import { RaceComponentModel } from '../models/raceComponent.model';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent implements RaceComponentModel {
  @Input({ required: true })
  raceModel!: RaceModel;
}
