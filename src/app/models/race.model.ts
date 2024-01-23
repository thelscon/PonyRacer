import { PonyModel } from './pony.model';

export interface RaceModel {
  readonly id: number;
  readonly name: string;
  readonly ponies: Array<PonyModel>;
  readonly startInstant: string;
}

export class Race implements RaceModel {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly ponies: Array<PonyModel>,
    public readonly startInstant: string
  ) {}
}
