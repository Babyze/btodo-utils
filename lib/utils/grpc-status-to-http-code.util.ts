import { status } from "@grpc/grpc-js";
import { HttpStatus } from "@nestjs/common";

export const GrpcStatusToHttpCode: Record<number, number> = {
  [status.INVALID_ARGUMENT]: HttpStatus.BAD_REQUEST,
  [status.UNAUTHENTICATED]: HttpStatus.UNAUTHORIZED,
  [status.PERMISSION_DENIED]: HttpStatus.FORBIDDEN,
  [status.NOT_FOUND]: HttpStatus.NOT_FOUND,
  [status.ALREADY_EXISTS]: HttpStatus.CONFLICT,
  [status.ABORTED]: HttpStatus.GONE,
  [status.RESOURCE_EXHAUSTED]: HttpStatus.TOO_MANY_REQUESTS,
  [status.INTERNAL]: HttpStatus.INTERNAL_SERVER_ERROR,
  [status.UNIMPLEMENTED]: HttpStatus.NOT_IMPLEMENTED,
  [status.UNKNOWN]: HttpStatus.BAD_GATEWAY,
  [status.UNAVAILABLE]: HttpStatus.SERVICE_UNAVAILABLE,
  [status.DEADLINE_EXCEEDED]: HttpStatus.GATEWAY_TIMEOUT,
  [status.OUT_OF_RANGE]: HttpStatus.PAYLOAD_TOO_LARGE,
  [status.CANCELLED]: HttpStatus.UNPROCESSABLE_ENTITY,
  [status.FAILED_PRECONDITION]: HttpStatus.PRECONDITION_FAILED,
};
