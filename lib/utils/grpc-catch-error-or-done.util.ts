import { RpcException } from "@nestjs/microservices";
import { catchError, firstValueFrom, map, Observable, throwError } from "rxjs";
import { transformgRPCToData } from "./transform-grpc-data-to-data.util";

export const grpcCatchErrorOrDone = <T>(func: Observable<T>): Promise<T> => {
  return firstValueFrom<T>(
    func.pipe(
      map((value) => transformgRPCToData(value)),
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
