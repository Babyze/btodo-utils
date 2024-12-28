import { status } from "@grpc/grpc-js";
import { RpcException } from "@nestjs/microservices";

abstract class Error extends RpcException {
  constructor(code: number, message = "") {
    super({
      code,
      message,
    });
  }
}

class NotFoundError extends Error {
  constructor(message = "Data not found") {
    super(status.NOT_FOUND, message);
  }
}

class InvalidAgrumentError extends Error {
  constructor(message?: string) {
    super(status.INVALID_ARGUMENT, message);
  }
}

class UnknownError extends Error {
  constructor(message?: string) {
    super(status.UNKNOWN, message);
  }
}

class AlreadyExistError extends Error {
  constructor(message?: string) {
    super(status.ALREADY_EXISTS, message);
  }
}

class UnauthenticatedError extends Error {
  constructor(message?: string) {
    super(status.UNAUTHENTICATED, message);
  }
}

class AbortedError extends Error {
  constructor(message?: string) {
    super(status.ABORTED, message);
  }
}

export {
  NotFoundError,
  InvalidAgrumentError,
  UnknownError,
  AlreadyExistError,
  UnauthenticatedError,
  AbortedError,
};
