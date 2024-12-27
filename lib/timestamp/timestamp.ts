interface ITimestamp {
  second: number;
}

export class Timestamp implements ITimestamp {
  second: number;

  constructor(date: number | Date) {
    if (date instanceof Date) {
      this.second = Math.floor(date.getTime() / 1000);
    } else {
      this.second = date;
    }
  }

  getSecond(): number {
    return this.second;
  }

  toDate(): Date {
    return new Date(this.second * 1000);
  }
}
