import { HttpException, HttpStatus } from "@nestjs/common";
import { catchError, firstValueFrom, throwError } from "rxjs";
import { GrpcStatusToHttpCode } from "./grpc-status-to-http-code.util";

export const httpCatchErrorOrDone = <T>(func: any): Promise<T> => {
  return firstValueFrom<T>(
    func.pipe(
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
