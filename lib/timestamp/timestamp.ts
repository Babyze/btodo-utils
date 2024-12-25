interface ITimestamp {
  second: number;
}

export class Timestamp implements ITimestamp {
  second: number;

  constructor(second: number) {
    this.second = second;
  }

  getSecond(): number {
    return this.second;
  }

  toDate(): Date {
    return new Date(this.second * 1000);
  }

  fromDate(date: Date): void {
    this.second = Math.floor(date.getTime() / 1000);
  }
}
