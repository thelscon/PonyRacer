import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceModel } from '../models/race.model';
import { Race } from '../models/race.model';
import { Pony } from '../models/pony.model';
import { PonyColor } from '../models/ponyColor.enum';

import { RaceComponent } from '../race/race.component';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [CommonModule, RaceComponent],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  races: RaceModel[] = [
    new Race(
      12,
      'Paris',
      [
        new Pony(1, 'Gentle Pie', 'YELLOW'),
        new Pony(2, 'Big Soda', 'ORANGE'),
        new Pony(3, 'Gentle Bottle', 'PURPLE'),
        new Pony(4, 'Superb Whiskey', 'GREEN'),
        new Pony(5, 'Fast Rainbow', 'BLUE')
      ],
      '2020-02-18T08:02:00Z'
    ),
    new Race(
      13,
      'Tokio',
      [
        new Pony(6, 'Fast Rainbow', 'BLUE'),
        new Pony(7, 'Gentle Castle', 'GREEN'),
        new Pony(8, 'Awesome Rosk', 'PURPLE'),
        new Pony(9, 'Little Rainbow', 'YELLOW'),
        new Pony(10, 'Great Soda', 'ORANGE')
      ],
      '2020-02-18T08:03:00Z'
    )
  ];
}
