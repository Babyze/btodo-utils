interface ITimestamp {
    second: number;
}
declare class Timestamp implements ITimestamp {
    second: number;
    constructor(date: number | Date);
    getSecond(): number;
    toDate(): Date;
}
declare class Timestamp2 {
}

export { Timestamp, Timestamp2 };
