import { Component } from '@angular/core';

import { Race } from '../models/race.model';
import { RacesModel } from '../models/races.model';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent implements RacesModel {
  races = [new Race(1, 'Lyon'), new Race(2, 'London')];
}
