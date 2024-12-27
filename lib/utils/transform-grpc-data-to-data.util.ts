import { Timestamp } from "../timestamp";
import Long from "long";

export const transformgRPCToData = (value: any) => {
  if (Array.isArray(value)) {
    return value.map((item) => transformValue(item));
  }

  return transformValue(value);
};

const transformValue = (value: any) => {
  if (value === null || value === undefined) {
    return value;
  }

  if (value && value.second) {
    return new Timestamp(value.second).toDate();
  }

  if (Long.isLong(value)) {
    return value.toNumber();
  }

  if (typeof value === "object") {
    const transformed: any = {};
    for (const key of Object.keys(value)) {
      transformed[key] = transformValue(value[key]);
    }
    return transformed;
  }

  return value;
};
