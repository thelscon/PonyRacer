import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PonyModel } from '../models/pony.model';
import { PonyComponentModel } from '../models/ponyComponent.model';

@Component({
  selector: 'pr-pony',
  standalone: true,
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent implements PonyComponentModel, OnInit {
  @Input({ required: true }) ponyModel!: PonyModel;
  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  getPonyImageUrl() {
    switch (this.ponyModel.color) {
      case 'BLUE':
        return 'assets/images/pony-blue.gif';
      case 'GREEN':
        return 'assets/images/pony-green.gif';
      case 'ORANGE':
        return 'assets/images/pony-orange.gif';
      case 'PURPLE':
        return 'assets/images/pony-purple.gif';
      case 'YELLOW':
        return 'assets/images/pony-yellow.gif';
    }
  }

  clicked() {
    this.ponyClicked.emit(this.ponyModel);
  }

  ngOnInit(): void {
    console.log(this.ponyModel.color);
  }
}
