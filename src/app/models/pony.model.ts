export interface PonyModel {
  readonly id: number;
  readonly name: string;
  readonly color: string;
}
export class Pony implements PonyModel {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly color: string
  ) {}
}
