// lib/timestamp/timestamp.ts
var Timestamp = class {
  constructor(second) {
    this.second = second;
  }
  getSecond() {
    return this.second;
  }
  toDate() {
    return new Date(this.second * 1e3);
  }
  fromDate(date) {
    this.second = Math.floor(date.getTime() / 1e3);
  }
};
export {
  Timestamp
};
//# sourceMappingURL=index.mjs.map