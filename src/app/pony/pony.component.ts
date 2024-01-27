import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PonyModel } from '../models/pony.model';
import { PonyComponentModel } from './pony.component.model';

@Component({
  selector: 'pr-pony',
  standalone: true,
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent implements PonyComponentModel {
  @Input({ required: true }) ponyModel!: PonyModel;
  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  getPonyImageUrl() {
    return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }

  clicked() {
    this.ponyClicked.emit(this.ponyModel);
  }
}
