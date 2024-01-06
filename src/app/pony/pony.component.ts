import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PonyModel } from '../models/pony.model';
import { PonyColor } from '../models/ponyColor.enum';

interface PonyComponentModel {
  readonly ponyModel: PonyModel;
  readonly ponyClicked: EventEmitter<PonyModel>;

  readonly getPonyImageUrl: () => string;
  readonly clicked: () => void;
}
@Component({
  selector: 'pr-pony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent implements PonyComponentModel {
  @Input({ required: true })
  ponyModel!: PonyModel;

  @Output()
  readonly ponyClicked = new EventEmitter<PonyModel>();

  getPonyImageUrl() {
    switch (this.ponyModel.color) {
      case PonyColor.blue.toUpperCase():
        return `assets/images/pony-${PonyColor.blue}.gif`;
      case PonyColor.green.toUpperCase():
        return `assets/images/pony-${PonyColor.green}.gif`;
      case PonyColor.orange.toUpperCase():
        return `assets/images/pony-${PonyColor.orange}.gif`;
      case PonyColor.purple.toUpperCase():
        return `assets/images/pony-${PonyColor.purple}.gif`;
      default:
        return `assets/images/pony-${PonyColor.yellow}.gif`;
    }
  }

  clicked() {
    this.ponyClicked.emit(this.ponyModel);
  }
}
