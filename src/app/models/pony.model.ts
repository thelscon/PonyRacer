const enum PonyColor {
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
  GREEN = 'green',
  BLUE = 'blue'
}

export interface PonyModel {
  readonly id: number;
  readonly name: string;
  readonly color: Uppercase<PonyColor>;
}

export class Pony implements PonyModel {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly color: Uppercase<PonyColor>
  ) {}
}
