// lib/timestamp/timestamp.ts
var Timestamp = class {
  constructor(date) {
    if (date instanceof Date) {
      this.second = Math.floor(date.getTime() / 1e3);
    } else {
      this.second = date;
    }
  }
  getSecond() {
    return this.second;
  }
  toDate() {
    return new Date(this.second * 1e3);
  }
};
var Timestamp2 = class {
};
export {
  Timestamp,
  Timestamp2
};
//# sourceMappingURL=index.mjs.map