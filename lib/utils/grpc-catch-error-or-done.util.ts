import { RpcException } from "@nestjs/microservices";
import { catchError, firstValueFrom, Observable, throwError } from "rxjs";

export const grpcCatchErrorOrDone = <T>(func: Observable<T>): Promise<T> => {
  return firstValueFrom<T>(
    func.pipe(
      catchError((err: RpcExceptionResponse) => {
        return throwError(() => new RpcException(err));
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
