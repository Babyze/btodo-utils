interface ITimestamp {
    second: number;
}
declare class Timestamp implements ITimestamp {
    second: number;
    constructor(second: number);
    getSecond(): number;
    toDate(): Date;
    fromDate(date: Date): void;
}

export { Timestamp };
