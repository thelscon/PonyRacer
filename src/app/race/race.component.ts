import { Component, Input } from '@angular/core';

import { RaceComponentModel } from '../models/raceComponent.model';
import { RaceModel } from '../models/race.model';

import { PonyComponent } from '../pony/pony.component';

@Component({
  selector: 'pr-race',
  standalone: true,
  imports: [PonyComponent],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent implements RaceComponentModel {
  @Input({ required: true })
  raceModel!: RaceModel;
}
