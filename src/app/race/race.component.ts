import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { RaceComponentModel } from '../models/raceComponent.model';
import { RaceModel } from '../models/race.model';

import { PonyComponent } from '../pony/pony.component';
import { FromNowPipe } from '../from-now.pipe';

@Component({
  selector: 'pr-race',
  standalone: true,
  imports: [PonyComponent, DatePipe, FromNowPipe],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent implements RaceComponentModel {
  @Input({ required: true })
  raceModel!: RaceModel;
}
