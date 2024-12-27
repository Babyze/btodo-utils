import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { map, Observable } from "rxjs";
import { Timestamp } from "../timestamp";

@Injectable()
export class GrpcDataTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((data: any) => this.transformData(data)));
  }

  private transformData(value: any) {
    if (Array.isArray(value)) {
      return value.map((item) => this.transformValue(item));
    }
    return this.transformValue(value);
  }

  private transformValue(value: any) {
    if (value === null || value === undefined) {
      return value;
    }

    if (value instanceof Date) {
      return new Timestamp(value);
    }

    if (typeof value === "object") {
      const transformed: any = {};
      for (const key of Object.keys(value)) {
        transformed[key] = this.transformValue(value[key]);
      }
      return transformed;
    }

    return value;
  }
}
