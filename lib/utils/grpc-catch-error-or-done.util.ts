import { catchError, throwError } from "rxjs";

export const grpcCatchErrorOrDone = (func: any) => {
  return func.pipe(
    catchError((err: RpcExceptionResponse) => {
      return throwError(() => err);
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
