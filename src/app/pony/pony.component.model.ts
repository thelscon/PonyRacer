import { EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';

export interface PonyComponentModel {
  readonly ponyModel: PonyModel;
  readonly ponyClicked: EventEmitter<PonyModel>;

  readonly getPonyImageUrl: () => string;
  readonly clicked: () => void;
}
