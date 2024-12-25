"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var index_exports = {};
__export(index_exports, {
  Timestamp: () => Timestamp,
  Timestamp2: () => Timestamp2
});
module.exports = __toCommonJS(index_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Timestamp,
  Timestamp2
});
//# sourceMappingURL=index.js.map