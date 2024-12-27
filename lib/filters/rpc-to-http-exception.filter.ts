import { Catch, ExceptionFilter } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { ValidationError } from "class-validator";
import { Observable, throwError } from "rxjs";
import { InvalidAgrumentError, UnknownError } from "../errors/error";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any): Observable<any> {
    if (exception instanceof RpcException) {
      return throwError(() => exception.getError());
    }

    if (exception instanceof ValidationError) {
      const errors = exception["message"] as string[];
      const message = "Validation failed: " + errors.join(", ");
      exception = new InvalidAgrumentError(message);
    } else {
      console.log(`unknow`, exception);
      exception = new UnknownError(exception?.toString() ?? "Unknow");
    }

    return throwError(() => exception.getError());
  }
}
