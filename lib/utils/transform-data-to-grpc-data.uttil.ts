import { Timestamp } from "../timestamp";

export const transformDataTogRPCData = (value: any) => transformValue(value);

const transformValue = (value: any) => {
  if (value === null || value === undefined) {
    return value;
  }

  if (value instanceof Date) {
    return new Timestamp(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => transformValue(item));
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
