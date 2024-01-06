import { PonyModel } from './pony.model';

export interface RaceModel {
  readonly id: number;
  readonly name: string;
  readonly ponies: PonyModel[];
  readonly startInstant: string;
}
export class Race implements RaceModel {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly ponies: PonyModel[],
    readonly startInstant: string
  ) {}
}
