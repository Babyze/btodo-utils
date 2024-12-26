import { HttpException, HttpStatus } from "@nestjs/common";
import { catchError, throwError } from "rxjs";
import { GrpcStatusToHttpCode } from "./grpc-status-to-http-code.util";

export const httpCatchErrorOrDone = (func: any) => {
  return func.pipe(
    catchError((err: RpcExceptionResponse) => {
      return throwError(
        () =>
          new HttpException(
            err.details,
            GrpcStatusToHttpCode[err.code] ?? HttpStatus.BAD_GATEWAY
          )
      );
    })
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
