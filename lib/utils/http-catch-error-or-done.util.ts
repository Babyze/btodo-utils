import { HttpException, HttpStatus } from "@nestjs/common";
import { catchError, firstValueFrom, map, Observable, throwError } from "rxjs";
import { GrpcStatusToHttpCode } from "./grpc-status-to-http-code.util";
import { transformgRPCToData } from "./transform-grpc-data-to-data.util";

export const httpCatchErrorOrDone = <T>(func: Observable<T>): Promise<T> => {
  return firstValueFrom<T>(
    func.pipe(
      map((value) => transformgRPCToData(value)),
      catchError((err: RpcExceptionResponse) => {
        return throwError(
          () =>
            new HttpException(
              err.details,
              GrpcStatusToHttpCode[err.code] ?? HttpStatus.BAD_GATEWAY
            )
        );
      })
    )
  );
};

interface RpcExceptionResponse {
  code: number;
  details: string;
  metadata: {
    "content-type": string[];
    date: string[];
  };
}
