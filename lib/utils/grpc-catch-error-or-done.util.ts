import { catchError, firstValueFrom, Observable, throwError } from "rxjs";

export const grpcCatchErrorOrDone = <T>(func: Observable<T>): Promise<T> => {
  return firstValueFrom<T>(
    func.pipe(
      catchError((err: RpcExceptionResponse) => {
        return throwError(() => err);
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
