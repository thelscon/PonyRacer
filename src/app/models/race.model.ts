export interface RaceModel {
  readonly id: number;
  readonly name: string;
}

export class Race implements RaceModel {
  constructor(
    public readonly id: number,
    public readonly name: string
  ) {}
}
